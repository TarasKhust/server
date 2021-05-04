import { Field, ObjectType } from '@nestjs/graphql';
import { Category } from '../entities/category.entity';

@ObjectType()
export class FindCategories {
	@Field(() => Number)
	id: number;

	@Field(() => String)
	name: string;

	@Field(() => Boolean, { nullable: true })
	status: boolean;

	@Field(() => [Category], { nullable: true })
	childCategories: Category[];

}
