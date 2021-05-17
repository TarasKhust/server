import { Field, InputType } from '@nestjs/graphql';
import { CreateAttribute } from './create-attribute';
import { AttributeEntity } from '../../attribute/entities/attribute.entity';

@InputType()
export class CreateAttributeGroup {

	@Field(() => Number, { nullable: true })
	id?: number;

	@Field(() => String, { nullable: true })
	name?: string;

	@Field(() => [CreateAttribute], { nullable: true })
	attribute?: AttributeEntity[];

}
