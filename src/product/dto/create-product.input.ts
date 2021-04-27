import { InputType, Field } from '@nestjs/graphql';

@InputType('Product')
export class CreateProductInput {

	@Field(() => String)
	name: string;

	@Field(() => String)
	description: string;

	@Field(() => String)
	image: string;

	@Field(() => Number)
	price: number;

	@Field(() => Number)
	count: number;

	@Field(() => String)
	vendor: string;

	@Field(() => String)
	brand: string;

	@Field(() => [String])
	categories: string[];

	@Field(() => [String])
	tags: string[];
}
