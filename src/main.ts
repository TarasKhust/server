import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as helmet from 'helmet';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
	const logger = new Logger('bootstrap');
	const app = await NestFactory.create(AppModule, { logger: true });
	const config = app.get(ConfigService);
	const development = config.get('environment') === 'development';
	const production = config.get('environment') === 'production';
	const PORT = config.get('port');

	logger.verbose(config.get('environment'));
	app.use(cookieParser());

	app.useGlobalPipes(new ValidationPipe());

	app.use(helmet({ contentSecurityPolicy: production ? undefined : false }));

	if (development) {
		app.enableCors();
		logger.verbose('cors is enabled');
	} else {
		app.enableCors({ origin: 'https://clientfront.herokuapp.com/' });
		logger.log('Accepting requests from origin https://clientfront.herokuapp.com/');
	}

	app.use(compression());

	await app.listen(PORT || 3000);

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}
}

bootstrap();
