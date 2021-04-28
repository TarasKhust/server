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
	const development = config.get('environment') === 'development';
	const production = config.get('environment') === 'production';
	const PORT = config.get('port');
	const whitelist = ['https://clientfront.herokuapp.com/', 'https://clientcrm.herokuapp.com/'];

	logger.verbose(config.get('environment'));

	app.setGlobalPrefix('api');

	app.use(cookieParser());

	app.use(bodyParser.json());

	app.useGlobalPipes(new ValidationPipe());

	app.use(helmet({ contentSecurityPolicy: production ? undefined : false }));

	if (development) {
		app.enableCors();
		logger.verbose('cors is enabled');
	} else {
		app.enableCors({
			origin: function (origin, callback) {
				if (whitelist.indexOf(origin) !== -1) {
					console.log('allowed cors for:', origin);
					callback(null, true);
				} else {
					console.log('blocked cors for:', origin);
					callback(new Error('Not allowed by CORS'));
				}
			},
			allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
			methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
			credentials: true,
		});
	}

	app.use(compression());

	await app.listen(PORT || 3000);

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}
}

bootstrap();
