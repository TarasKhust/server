import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserType } from '../users/dto/user-type';
import { AuthService } from './auth.service';
import { User } from '../users/user.entity';
import { CtxUser } from '../decorators/ctx-user.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Resolver()
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation(() => UserType)
	public async login(@Args('email') email: string, @Args('password') password: string) {
		return this.authService.login(email, password);
	}

	@UseGuards(JwtAuthGuard)
	@Mutation(() => UserType)
	public async createUser(@CtxUser() user: User, @Args('email') email: string, @Args('password') password: string): Promise<User> {
		return this.authService.createUser(email, password);
	}
}
