import { Resolver, Query, Mutation, Args, Int, Context } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { UserType } from "./dto/user-type";
import { UseGuards } from "@nestjs/common";
import { User } from "./user.entity";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { AuthGuard } from "../guards/auth.guard";

@Resolver(of => UserType)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserType)
  @UseGuards(new AuthGuard())
  me(@Context("user") user: User) {
    return user;
  }

  @Query(() => [UserType])
   getUser() {
      return this.usersService.getUsers();
  }

  @UseGuards(new AuthGuard())
  @Mutation(() => UserType)
  createUser(@Args("email") email: string, @Args("password") password: string): Promise<User> {
    return this.usersService.createUser(email, password);
  }

  @Mutation(() => UserType)
  async login(@Args("email") email: string, @Args("password") password: string) {
    const user = await this.usersService.getUserByEmail(email);

    if (!user) {
       throw new Error("email is Does Not Exist");
    }

    const isPassword = await this.usersService.validatePassword(password, user?.salt, user.password);

    if (!isPassword) {
      throw new Error("password is Does Not Exist");
    }

      const token = this.usersService.crateToken(user);

    return { token: token, status: true };
  }
}
