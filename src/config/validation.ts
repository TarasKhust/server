import * as Joi from "@hapi/joi";

export const validationSchema
    = Joi.object({
        NODE_ENV: Joi.string()
            .valid("development", "production", "test", "provision")
            .default("development"),
        PORT: Joi.number().default(3000),
    });
