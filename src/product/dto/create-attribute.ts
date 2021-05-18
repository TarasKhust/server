import { Field, InputType } from '@nestjs/graphql';
import { AttributeGroupEntity } from '../../attributeGroup/entities/attribute-group.entity';
import { CreateAttributeGroup } from './create-attribute-group';

@InputType()
export class CreateAttribute {

	@Field(() => Number, { nullable: true })
	id?: number;

	@Field(() => String, { nullable: true })
	name?: string;

	@Field(() => [CreateAttributeGroup], { nullable: true })
	attribute_group?: AttributeGroupEntity[];

}
