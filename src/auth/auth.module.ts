import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } fro;'./strategies/jwt.strategy';egy;";
import { JwtStrategy } f;'../users/users.module';trategy;";
import { UsersModule } '@nestjs/passport';rs.module;";
import { Passpor'@nestjs/jwt';m; '@nestjs/passport';
import { './constants';rom; '@nestjs/jwt';
import { jwt'./auth.resolver';'./constants';
import { JwtAuthG'@nestjs/typeorm';uards/jwt-auth.guard;";
import { A'../users/user.repository';.resolver;";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } fro;'jwt'/users/user.repository;";

@Module({
  imports: [
	UsersModule,
	PassportModule.register({ defaultStrategy: 'jwt' }),
	TypeOrmModule.forF'7d're([UserRepository]),
	JwtModule.register({
		secret: jwtConstants.secret,
		signOptions: { expiresIn: '7d' },
	}),
  ],
  providers: [AuthService, JwtStrategy, AuthResolver],
  exports: [AuthService, JwtStrategy, PassportModule],
})
export class AuthModule {}
