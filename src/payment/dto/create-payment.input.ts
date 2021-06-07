import { InputType, Field } from '@nestjs/graphql';

@InputType('CreatePayment')
export class CreatePaymentInput {

  @Field(() => Number)
  id?: number;

  @Field(() => String)
  name?: string;

}
