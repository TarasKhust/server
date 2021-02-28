import { Resolver, Query, Mutation, Args, Int, Context } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { UserType } from "./dto/user-type";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "./auth.guard";
import { User } from "./user.entity";
import { CreateUserInput } from "./dto/create-user.input";

@Resolver(of => UserType)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => String)
  @UseGuards(new AuthGuard())
  me(@Context("user") user: User) {
    return user;
  }

  /*
   * @Query(() => UserType)
   * async getEmail(@Args("email") email: string) {
   *   const { getUserByEmail } = this.usersService;
   *   await getUserByEmail(email);
   *   return email;
   * }
   *
   * @Mutation(() => String)
   * async newUser(@Args("email") email: string) {
   *   let user = await this.usersService.getUserByEmail(email);
   *
   *   if (!user) {
   *     user = await this.usersService.createUser(email);
   *   }
   *
   *   return user;
   * }
   */

  /*
   * @Mutation(() => UserType)
   * async login(@Args("email") email: string, @Args("password") password: string) {
   *   let user = await this.usersService.getUserByEmail(email, password);
   *
   *   if (!user) {
   *     user = await this.usersService.createUser(email, password);
   *   }
   *
   *   return this.usersService.crateToken(user);
   * }
   */

  @Mutation(() => UserType)
  async signUp(@Args("createUserInput") createUserInput: CreateUserInput) {
    return this.usersService.createUser2Input(createUserInput);
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
