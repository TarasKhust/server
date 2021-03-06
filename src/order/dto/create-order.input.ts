import { Field, InputType, Int } from '@nestjs/graphql';

import { CreateCustomerInput } from '../../customer/dto/create-customer.input';
import { CreatePaymentInput } from '../../payment/dto/create-payment.input';
import { CreateOrderProductInput } from '../../order-product/dto/create-order-product.input';
import { CreateOrderStatusInput } from '../../order-status/dto/create-order-status.input';

@InputType()
export class CreateOrderInput {

  @Field(() => [CreateCustomerInput], { nullable: true })
  customer: CreateCustomerInput[];

  @Field(() => Number)
  payment: CreatePaymentInput;

  @Field(() => [CreateOrderProductInput])
  orderProducts: CreateOrderProductInput[];

  @Field(() => Number)
  orderStatus: CreateOrderStatusInput;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  department?: string;

  @Field(() => String, { nullable: true })
  street?: string;

  @Field(() => String, { nullable: true })
  houseNumber?: string;

  @Field(() => String, { nullable: true })
  apartmentNumber?: string;

  @Field(() => Int)
  total: number;
}
