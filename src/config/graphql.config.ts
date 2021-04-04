
export const graphqlConfig = {
    debug: (process.env.NODE_ENV === "development"),
    playground: (process.env.NODE_ENV === "development"),
    installSubscriptionHandlers: true,
    autoSchemaFile: true,
    context: ({ req }) => ({ headers: req.headers }),
};
