import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration, database, databaseConfigDev } from './config/configuration';
import { ScheduleModule } from '@nestjs/schedule';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { graphqlConfig } from './config/graphql.config';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { validationSchema } from './config/validation';
import { typeormConfig } from './config/typeorm.config';
import { ProductModule } from './product/product.module';
import { BrandModule } from './brand/brand.module';
import { FilesModule } from './files/files.module';
import { AttributeModule } from './attribute/attribute.module';

@Module({
  imports: [
	ConfigModule.forRoot({
		envFilePath: ['.env.development', '.env.production', '.env.provision'],
		isGlobal: true,
		cache: true,
		load: [configuration, database, databaseConfigDev],
		validationSchema,
	}),
	GraphQLModule.forRootAsync({
		imports: [ConfigModule],
		inject: [ConfigService],
		useFactory: graphqlConfig,
	}),
	TypeOrmModule.forRootAsync({
	imports: [ConfigModule],
	inject: [ConfigService],
	useFactory: typeormConfig,
	}

	),
	CacheModule.register(),
	ScheduleModule.forRoot(),
	UsersModule,
	AuthModule,
	CategoryModule,
	ProductModule,
	BrandModule,
  	FilesModule,
  	AttributeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
}
