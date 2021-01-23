import { CreateVpInput } from './create-vp.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVpInput extends PartialType(CreateVpInput) {
  @Field(() => Int)
  id: number;
}
