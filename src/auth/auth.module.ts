import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import {UserService} from "../user/user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserSchema} from "../user/user.schema";

@Module({
  imports: [UserModule, PassportModule, TypeOrmModule.forFeature([UserSchema])],
  providers: [AuthService, LocalStrategy, UserService],
})
export class AuthModule {}
