import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderProductInput {

  @Field(() => String)
  product_id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  vendor: string;

  @Field(() => Number)
  quantity: number;

  @Field(() => Number)
  price: number;

  @Field(() => Number)
  total: number;
}
