import { ConfigService } from '@nestjs/config';

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
			origin: function (origin: string, callback: any) {
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
		},
	};
};
