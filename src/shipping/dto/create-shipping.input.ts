import { InputType, Field } from '@nestjs/graphql';

@InputType('CreateShipping')
export class CreateShippingInput {
  @Field(() => Number)
  id?: number;

  @Field(() => String, { nullable: true })
  name?: string;

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

}
