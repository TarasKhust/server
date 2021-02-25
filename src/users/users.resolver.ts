import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { UserType } from "./dto/user-type";

@Resolver(of => UserType)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(returns => UserType)
  async getUserByEmail(@Args("email") email: string) {

  }

  @Mutation(returns => UserType)
  async login(@Args("email") email: string) {
    let user = await this.usersService.getUserByEmail(email);

    if (!user) {
      user = await this.usersService.createUser(email);
    }

    return this.usersService.crateToken(user);
  }
}
