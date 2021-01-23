import {CacheModule, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CatsModule } from './cats/cats.module';
import { MemberModule } from './member/member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { ScheduleModule } from '@nestjs/schedule';
import * as Joi from '@hapi/joi';
import {BullModule} from "@nestjs/bull";
import {EventEmitterModule} from "@nestjs/event-emitter";
import { AuthModule } from './auth/auth.module';
import { CaslModule } from './casl/casl.module';
import {GraphQLModule} from "@nestjs/graphql";
import { VpsModule } from './vps/vps.module';

// const configGraph = {
//   typePaths: ['./**/*.graphql'],
//   definitionsFactory.generate({
//     typePaths: ['./src/**/*.graphql'],
//     path: join(process.cwd(), 'src/graphql.ts'),
//     outputAs: 'class',
//     emitTypenameField: true,
//     skipResolverArgs: true,
//     watch: true,
//   }),
//   definitions: {
//     // path: join(process.cwd(), 'src/graphql.ts'),
//     outputAs: 'class',
//   },
// }

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      ignoreEnvFile: true,
      isGlobal: true,
      cache: true,
      load: [configuration],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
            .valid('development', 'production', 'test', 'provision')
            .default('development'),
        PORT: Joi.number().default(3000),
      }),
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'tarasrushchak',
      password: 'root',
      database: 'postgres',
      synchronize: true,

      autoLoadEntities: true,
    }),
    EventEmitterModule.forRoot({
      // set this to `true` to use wildcards
      wildcard: false,
      // the delimiter used to segment namespaces
      delimiter: '.',
      // set this to `true` if you want to emit the newListener event
      newListener: false,
      // set this to `true` if you want to emit the removeListener event
      removeListener: false,
      // the maximum amount of listeners that can be assigned to an event
      maxListeners: 10,
      // show event name in memory leak message when more than maximum amount of listeners is assigned
      verboseMemoryLeak: false,
      // disable throwing uncaughtException if an error event is emitted and it has no listeners
      ignoreErrors: false,
    }),
    CacheModule.register(),
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    TodosModule,
    MemberModule,
    UserModule,
    CatsModule,
    AuthModule,
    CaslModule,
    VpsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
