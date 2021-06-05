import { InputType, Int, Field } from '@nestjs/graphql';

@InputType('CreateCustomerInput')
export class CreateCustomerInput {

  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string;

}
