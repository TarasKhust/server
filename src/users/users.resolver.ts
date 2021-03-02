import { Resolver, Query, Mutation, Args, Int, Context } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { UserType } from "./dto/user-type";
import { UseGuards } from "@nestjs/common";
import { User } from "./user.entity";
import { GqlAuthGuard } from "../guards/gql-auth.guard";

@UseGuards(GqlAuthGuard)
@Resolver(of => UserType)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserType)
  me(@Context("user") user: User) {
    return user;
  }

  @Query(() => [UserType])
   getUser() {
      return this.usersService.getUsers();
  }
}
