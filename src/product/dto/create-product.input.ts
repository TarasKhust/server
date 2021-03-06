import { InputType, Field } from '@nestjs/graphql';
import { BrandEntity } from '../../brand/entities/brand.entity';
import { Category } from '../../category/entities/category.entity';
import { CreateAttribute } from './create-attribute';
import { AttributeEntity } from '../../attribute/entities/attribute.entity';

@InputType('Product')
export class CreateProductInput {

	@Field(() => String)
	name: string;

	@Field(() => String)
	description: string;

	@Field(() => [String])
	image: string[];

	@Field(() => Number)
	price: number;

	@Field(() => Number)
	count: number;

	@Field(() => String)
	vendor: string;

	@Field(() => String)
	brand?: BrandEntity;

	@Field(() => Number)
	category?: Category;

	@Field(() => [CreateAttribute], { nullable: true })
	attribute?: AttributeEntity[];

	@Field(() => [String])
	tags: string[];

	@Field(() => Number)
	minimalCount: number;

	@Field(() => String)
	statusExist: string;

	@Field(() => Boolean, { nullable: true })
	status: boolean;

	@Field(() => String, { nullable: true })
	metaDescription: string;

	@Field(() => [String], { nullable: true })
	metaDataTagKeyword: string[];

	@Field(() => String, { nullable: true })
	seoUrl: string;
}
