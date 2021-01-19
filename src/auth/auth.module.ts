import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import {UserService} from "../user/user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserSchema} from "../user/user.schema";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {JwtStrategy} from "./jwt.strategy";

@Module({
  imports: [UserModule, PassportModule, TypeOrmModule.forFeature([UserSchema]), JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }), JwtStrategy],
  providers: [AuthService, LocalStrategy, UserService],
  exports: [AuthService, JwtStrategy]
})
export class AuthModule {}
