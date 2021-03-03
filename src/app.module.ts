import { CacheModule, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { ConfigModule } from "@nestjs/config";
import configuration from "../config/configuration";
import { ScheduleModule } from "@nestjs/schedule";
import * as Joi from "@hapi/joi";
import { GraphQLModule } from "@nestjs/graphql";
import { UsersModule } from "./users/users.module";
import { graphqlConfig } from "../config/graphql.config";
import { typeormConfig } from "../config/typeorm.config";
import { CatalogModule } from "./catalog/catalog.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".development.env",
      ignoreEnvFile: true,
      isGlobal: true,
      cache: true,
      load: [configuration],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
            .valid("development", "production", "test", "provision")
            .default("development"),
        PORT: Joi.number().default(3000),
      }),
    }),
    GraphQLModule.forRoot(graphqlConfig),
    TypeOrmModule.forRoot(typeormConfig),
    CacheModule.register(),
    ScheduleModule.forRoot(),
    UsersModule,
    CatalogModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
