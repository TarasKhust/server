import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { NotFoundException } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category)
  createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput): Promise<CreateCategoryInput> {
	return this.categoryService.createCategory(createCategoryInput);
  }

  @Query(() => [Category], { name: 'categoryFindAll' })
  async findAll(): Promise<Category[]> {
	return this.categoryService.findAll();
  }

  @Query(() => Category, { name: 'categoryFindOne' })
  async findOne(@Args('id', { type: () => String }) id: string): Promise<Category | undefined> {

	  try {
		  return await this.categoryService.findOne(id);
	  } catch (error) {
		  throw new NotFoundException(`Brand with id ${id} does not exist`);
	  }
  }

  @Mutation(() => Category)
  async updateCategory(@Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput): Promise<UpdateResult> {
	return this.categoryService.update(updateCategoryInput.id, updateCategoryInput);
  }

  @Mutation(() => Category)
  async removeCategory(@Args('id', { type: () => String }) id: string): Promise<DeleteResult> {
	return this.categoryService.remove(id);
  }
}
