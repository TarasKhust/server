import { ConfigService } from '@nestjs/config';

export const graphqlConfig = (configService: ConfigService) => {
	const development = configService.get('environment') === 'development';
	const provision = configService.get('environment') === 'provision';

	const dev = provision || development;

	return {
		debug: true,
		playground: true,
		installSubscriptionHandlers: true,
		uploads: {
			maxFileSize: 20000000, // 20 MB
			maxFiles: 5,
		},
		introspection: true,
		autoSchemaFile: true,
		context: ({ req }: any) => ({ headers: req.headers }),
		cors: true,
	};
};
