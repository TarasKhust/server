import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AttributeGroup {

	@Field(() => String)
	attribute_group: string;

	@Field(() => String)
	attribute: string;

}
