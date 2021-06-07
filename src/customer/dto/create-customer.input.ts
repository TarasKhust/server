import { InputType, Field } from '@nestjs/graphql';

@InputType('CreateCustomerInput')
export class CreateCustomerInput {

  @Field(() => Number)
  id?: number;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  surName: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string;

}
