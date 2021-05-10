import { CreateAttributeGroupInput } from './create-attribute-group.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAttributeGroupInput extends PartialType(CreateAttributeGroupInput) {
  @Field(() => Int)
  id: number;
}
