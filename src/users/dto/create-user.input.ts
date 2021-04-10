import { Int, Field, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => Int)
  id: number;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}
