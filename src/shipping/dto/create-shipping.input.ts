import { InputType, Int, Field } from '@nestjs/graphql';

@InputType('CreateShipping')
export class CreateShippingInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  city: string;

  @Field(() => String)
  department?: string;

  @Field(() => String)
  street?: string;

  @Field(() => String)
  houseNumber?: string;

  @Field(() => String)
  apartmentNumber?: string;

}
