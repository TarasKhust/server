import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as helmet from 'helmet';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bodyParser from 'body-parser';

async function bootstrap() {
	const logger = new Logger('bootstrap');
	const app = await NestFactory.create(AppModule, { logger: true });
	const config = app.get(ConfigService);
	const production = config.get('environment') === 'production';
	const PORT = config.get('port');

	logger.verbose(config.get('environment'));

	app.setGlobalPrefix('api');

	app.use(cookieParser());

	app.use(bodyParser.json());

	app.useGlobalPipes(new ValidationPipe());

	app.use(helmet({ contentSecurityPolicy: production ? undefined : false }));

	app.use(compression());

	app.enableCors();

	await app.listen(PORT || 3000);

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}
}

bootstrap();
