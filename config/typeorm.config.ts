import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeormConfig: TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "tarasrushchak",
    password: "root",
    database: "postgres",
    synchronize: true,
    autoLoadEntities: true,
};
