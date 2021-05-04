import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FindCategories {
	@Field(() => String)
	id: string;

	@Field(() => String)
	title: string;

	@Field(() => String)
	value: string;

	@Field(() => String)
	label: string;

	@Field(() => Boolean, { nullable: true })
	disabled: boolean;

	@Field(() => [FindCategories], { nullable: true })
	children: FindCategories[];

}
