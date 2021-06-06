import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderProductInput {
  @Field(() => Number)
  order_id: number;

  @Field(() => Number)
  product_id: number;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  model: number;

  @Field(() => Number)
  quantity: number;

  @Field(() => Number)
  price: number;

  @Field(() => Number)
  total: number;
}
