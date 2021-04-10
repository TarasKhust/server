import { ConfigService } from '@nestjs/config';

/*
 * export const graphlConfig = {
 *     debug: (process.env.NODE_ENV === "development"),
 *     playground: (process.env.NODE_ENV === "development"),
 *     installSubscriptionHandlers: true,
 *     autoSchemaFile: true,
 *     context: ({ req }) => ({ headers: req.headers }),
 * };
 */

export const graphqlConfig = (configService: ConfigService) => {
	const development = configService.get('environment') === 'development';
	return {
		debug: development,
		playground: development,
		installSubscriptionHandlers: true,
		autoSchemaFile: true,
		context: ({ req }: any) => ({ headers: req.headers }),
	};
};
