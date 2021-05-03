import { ConfigService } from '@nestjs/config';

export const graphqlConfig = (configService: ConfigService) => {
	const development = configService.get('environment') === 'development';
	return {
		debug: true,
		playground: true,
		installSubscriptionHandlers: true,
		autoSchemaFile: true,
		context: ({ req }: any) => ({ headers: req.headers }),
		cors: true,
	};
};
