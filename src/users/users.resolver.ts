import { Resolver, Query, Mutation, Args, Int, Context } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { UserType } from "./dto/user-type";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "./auth.guard";
import { User } from "./user.entity";

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

  @Mutation(() => UserType)
  async login(@Args("email") email: string, @Args("password") password: string) {
    const user = await this.usersService.getUserByEmail(email, password);

      if (!user) {
        throw new Error("email is Does Not Exist");
      }

      const token = this.usersService.crateToken(user);

    return { token: token, status: true };
  }
}
