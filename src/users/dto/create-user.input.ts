import { Int, Field } from "@nestjs/graphql";

@Object()
export class CreateUserInput {
  @Field(() => Int)
  id: number;

  @Field()
  email: number;
}
