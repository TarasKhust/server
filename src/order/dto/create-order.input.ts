import { Field, InputType, Int } from '@nestjs/graphql';

import { CreateProductInput } from '../../product/dto/create-product.input';
import { CreateCustomerInput } from '../../customer/dto/create-customer.input';
import { CreateShippingInput } from '../../shipping/dto/create-shipping.input';
import { CreatePaymentInput } from '../../payment/dto/create-payment.input';

@InputType()
export class CreateOrderInput {
  @Field(() => Int)
  order_id: number;

  @Field(() => CreateProductInput, { nullable: true })
  product: CreateProductInput;

  @Field(() => [CreateCustomerInput], { nullable: true })
  customer: CreateCustomerInput[];

  @Field(() => [CreateShippingInput], { nullable: true })
  shipping: CreateShippingInput[];

  @Field(() => [CreatePaymentInput], { nullable: true })
  payment: CreatePaymentInput[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Int)
  total: number;
}
