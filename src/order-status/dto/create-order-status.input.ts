import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderStatusInput {
  @Field(() => String)
  name: string;
}
