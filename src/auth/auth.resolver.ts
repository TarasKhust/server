import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserType } from "../users/dto/user-type";
import { AuthService } from "./auth.service";
import { UsersService } from "../users/users.service";
import { NotFoundException } from "@nestjs/common";

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService,
                private readonly usersService: UsersService) {
    }

    @Mutation(() => UserType)
   public async login(@Args("email") email: string, @Args("password") password: string) {
        const user = await this.usersService.getUserByEmail(email);

        if (!user) {
            throw new NotFoundException(`User with email ${email} does not exist`);
        }

        const isPassword = await this.usersService.validatePassword(password, user?.salt, user.password);

        if (!isPassword) {
            throw new Error("invalid password");
        }

        const token = this.usersService.crateToken(user);

        return { token: token, status: true };
    }
}
