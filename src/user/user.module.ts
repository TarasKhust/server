import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './user.schema';
import { UserSubscriber } from './user.subscriber';
import { UserEntity } from "./user1.entity";
import {UserResolver} from "./user.resolver";

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema, UserEntity])],
  controllers: [UserController],
  providers: [UserService, UserSubscriber, UserResolver],
})
export class UserModule {}
