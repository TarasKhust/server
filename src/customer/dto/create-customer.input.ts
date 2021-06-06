import { InputType, Field } from '@nestjs/graphql';
import { CreateShippingInput } from '../../shipping/dto/create-shipping.input';

@InputType('CreateCustomerInput')
export class CreateCustomerInput {

  @Field(() => Number)
  id?: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string;

  @Field(() => CreateShippingInput, { nullable: true })
  shipping: CreateShippingInput;

}
