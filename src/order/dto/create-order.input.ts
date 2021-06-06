import { Field, InputType, Int } from '@nestjs/graphql';

import { CreateProductInput } from '../../product/dto/create-product.input';
import { CreateCustomerInput } from '../../customer/dto/create-customer.input';
import { CreatePaymentInput } from '../../payment/dto/create-payment.input';

@InputType()
class AddOrderProductId {
  @Field(() => String)
  id: string;
}

@InputType()
export class CreateOrderInput {

  @Field(() => [AddOrderProductId], { nullable: true })
  product?: CreateProductInput[];

  @Field(() => CreateCustomerInput, { nullable: true })
  customer: CreateCustomerInput;

  @Field(() => Number)
  payment: CreatePaymentInput;

  @Field(() => Int)
  total: number;
}
