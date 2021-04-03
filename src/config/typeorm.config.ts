import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeormConfig: TypeOrmModuleOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: 5432,
    username: process.env.POSTGRES_USERNAME || "tarasrushchak",
    password: process.env.POSTGRES_PASSWORD || "root",
    database: process.env.POSTGRES_DATABASE || "postgres",
    synchronize: true,
    autoLoadEntities: true,
};
