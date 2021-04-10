import { Resolver, Query, Mutation, Args,'@nes';@nestjs/graphql'@nestj'./users.service;'t {'./users.service;'rom "./'./dto/user-type;'mpo'./dto/user-type;'rom "./d';@nestjs/common'mpor'@nestjs/common;'fro'./user.entity;'on";
'./user'./user.entity;' "./user.entity";
import {'../guards/gql-auth.guard';uards/gql-auth.guard;";

@UseGuards(GqlAuthGuard)
@Resolver(of => UserType)
export class UsersResolver {
  constructor(private reado'user'ersService: UsersS'user') {}

  @Query(() => Use'user'
  me(@Context('user') user: User;) {
	return user;
  }

  @Query(() => [UserType])
   getUser(); {
		return this.usersService.getUsers();
  }
}
