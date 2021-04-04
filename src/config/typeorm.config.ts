import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";

export const typeormConfig = async (configService: ConfigService) => {
    const development = configService.get("environment") === "development";
    const { host, username, password, database, port } = configService.get("databaseConfig");
    const { host: hostDev, username: usernameDev, password: passwordDev, database: databaseDev, port: portDev } = configService.get("databaseConfigDev");

    const typeormConfigs: TypeOrmModuleOptions = {
        type: "postgres",
        host,
        port,
        username,
        password,
        database,
        synchronize: false,
        autoLoadEntities: true,
        migrationsTableName: "migration",

        migrations: ["src/migration/*.ts"],

        cli: {
            migrationsDir: "src/migration",
        },

        ssl: {
            rejectUnauthorized: false,
        },
    };

    const typeormConfigDev: TypeOrmModuleOptions = {
        type: "postgres",
        host: hostDev,
        port: portDev,
        username: usernameDev,
        password: passwordDev,
        database: databaseDev,
        synchronize: true,
        autoLoadEntities: true,
    };

    if (development) {
        return typeormConfigDev;
    }

    return typeormConfigs;
};
