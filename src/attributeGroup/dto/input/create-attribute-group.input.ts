import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { AttributeEntity } from '../../../attribute/entities/attribute.entity';

@InputType()
export class CreateAttributeGroupInput {

  @Field(() => String)
  @IsNotEmpty()
  name: string;

  @Field(() => [Number])
  @IsNotEmpty()
  attribute: AttributeEntity[];

}
