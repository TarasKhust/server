import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { AttributeEntity } from '../../../attribute/entities/attribute.entity';
import { CreateAttributeInput } from '../../../attribute/dto/create-attribute.input';

@InputType()
export class CreateAttributeGroupInput {

  @Field(() => String)
  @IsNotEmpty()
  name: string;

  @Field(() => [CreateAttributeInput])
  @IsNotEmpty()
  attribute: AttributeEntity[];

}
