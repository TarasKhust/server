import { ConfigService } from '@nestjs/config';

export const graphqlConfig = (configService: ConfigService) => {
	const development = configService.get('environment') === 'development';
	const provision = configService.get('environment') === 'provision';

	const dev = provision || development;

	return {
		debug: dev,
		playground: dev,
		installSubscriptionHandlers: true,
		introspection: dev,
		autoSchemaFile: true,
		context: ({ req }: any) => ({ headers: req.headers }),
		cors: true,
	};
};
