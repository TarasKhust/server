import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FindCategories } from './dto/find-categories';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

	@UseGuards(JwtAuthGuard)
	@Mutation(() => Category)
	createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput): Promise<CreateCategoryInput> {
	return this.categoryService.createCategory(createCategoryInput);
	}

	@Query(() => [FindCategories], { name: 'categoryFindAll' })
	async findAll(): Promise<{ id: number; title: string; disabled: boolean; value: number; label: string; children: any }[]> {
		const category = await this.categoryService.findAll();

		const adapter = (data: Category[] = []): { id: number; title: string; disabled: boolean; value: number; label: string; children: any }[] => {
			const array: { id: number; key: number, title: string; disabled: boolean; value: number; label: string; children: any; }[] = [];

			data?.forEach((value) => {
				if (value.parentCategory) {
					return;
				}

				array.push({
					id: value.id,
					key: value.id,
					title: value.name,
					disabled: !value.status,
					value: value.id,
					label: value.name,
					children: value.childCategories.map((v: { id: { toString: () => string; }; name: string; status: boolean; }) => {
						return {
							id: v.id,
							key: `${value.id.toString()}-${v.id.toString()}`,
							title: v.name,
							disabled: !v.status,
							value: v.id,
						};
					}),

				});
			});

			return array;
		};

		return adapter(category);
	}

	@Query(() => Category, { name: 'categoryFindOne' })
	async findOne(@Args('id', { type: () => Number }) id: number): Promise<Category | undefined> {

	  try {
		  return await this.categoryService.findOne(id);
	  } catch (error) {
		  throw new NotFoundException(`Brand with id ${id} does not exist`);
	  }
	}

	@UseGuards(JwtAuthGuard)
	@Mutation(() => Category)
	async updateCategory(@Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput): Promise<UpdateResult> {
	return this.categoryService.update(updateCategoryInput.id, updateCategoryInput);
	}

	@UseGuards(JwtAuthGuard)
	@Mutation(() => Category)
	async removeCategory(@Args('id', { type: () => Number }) id: number): Promise<DeleteResult> {
	return this.categoryService.remove(id);
	}
}
