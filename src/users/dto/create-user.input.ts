import { Int, Field } from "@nestjs/graphql";
import { MinLength } from "class-validator";

@Object()
export class CreateUserInput {
  @Field(() => Int)
  @MinLength(1)
  id: number;

  @Field()
  email: number;

  @Field()
  password: number;
}
