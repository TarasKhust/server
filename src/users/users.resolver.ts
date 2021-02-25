import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { UpdateUserInput } from "./dto/update-user.input";
import { Redirect } from "@nestjs/common";

@Resolver(User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async login(@Args("email") email: string) {
    let user = await this.usersService.getUserByEmail(email);

    if (!user) {
      user = await this.usersService.createUser(email);
    }

    return this.usersService.crateToken(user);
  }

  @Query(() => [User], { name: "users" })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => String)
  @Redirect("https://nestjs.com", 301)
  hello() {
    return "world";
  }

  @Mutation(() => User)
  updateUser(@Args("updateUserInput") updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args("id", { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
