
export const graphqlConfig = {
    debug: true,
    playground: true,
    installSubscriptionHandlers: true,
    autoSchemaFile: true,
    context: ({ req }) => ({ headers: req.headers }),
};
