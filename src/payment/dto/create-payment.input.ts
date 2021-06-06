import { InputType, Field } from '@nestjs/graphql';

@InputType('CreatePayment')
export class CreatePaymentInput {

  @Field(() => String)
  name: string;

}
