import { InputType, Field } from '@nestjs/graphql';
import { AttributeGroupEntity } from '../../attributeGroup/entities/attribute-group.entity';

@InputType()
export class CreateAttributeInput {

  @Field(() => String)
  name: string;

  @Field(() => Number)
  attributeGroup?: AttributeGroupEntity;

}
