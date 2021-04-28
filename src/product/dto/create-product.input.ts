import { InputType, Field } from '@nestjs/graphql';
import { BrandEntity } from '../../brand/entities/brand.entity';
import { Category } from '../../category/entities/category.entity';

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
	brand: BrandEntity;

	@Field(() => String)
	category: Category;

	@Field(() => [String])
	tags: string[];
}
