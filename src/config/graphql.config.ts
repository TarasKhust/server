import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

const logger = new Logger('bootstrap');

const whitelist = ['https://clientfront.herokuapp.com/', 'https://clientcrm.herokuapp.com/', 'http://localhost:9000'];

export const graphqlConfig = (configService: ConfigService) => {
	const development = configService.get('environment') === 'development';
	return {
		debug: development,
		playground: development,
		installSubscriptionHandlers: true,
		autoSchemaFile: true,
		context: ({ req }: any) => ({ headers: req.headers }),
		cors: {
			origin: function (origin: string, callback: (arg0: Error | null, arg1: boolean | undefined) => any) {

				if (whitelist.indexOf(origin) !== -1) {
					console.log('allowed cors for:', origin);
					return callback(null, true);
				}

					console.log('blocked cors for:', origin);
					return callback(new Error('Not allowed by CORS'), false);

			},
			allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
			methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
			credentials: true,
		},
	};
};
