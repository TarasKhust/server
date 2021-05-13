import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAttribute {

	@Field(() => Number, { nullable: true })
	id?: number;

	@Field(() => String, { nullable: true })
	name?: string;

}
