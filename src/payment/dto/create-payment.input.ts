import { InputType, Int, Field } from '@nestjs/graphql';

@InputType('CreatePayment')
export class CreatePaymentInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

}
