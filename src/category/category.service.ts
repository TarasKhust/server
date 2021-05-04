import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Category } from './entities/category.entity';
import { UpdateCategoryInput } from './dto/update-category.input';
import { FindCategories } from './dto/find-categories';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

  public async createCategory(createCategoryInput: CreateCategoryInput): Promise<Category> {
	  const { name } = createCategoryInput;

	  const getProductVendor = await this.categoryRepository.findOne({
		  where: {
			  name,
		  },
	  });

	  if (getProductVendor) {
		  throw new NotFoundException(`This ${name} already exist`);
	  }

	  const newProduct = await this.categoryRepository.create(createCategoryInput);

	  return this.categoryRepository.save(newProduct);
  }

  public async findAll(): Promise<FindCategories[]> {

	return this.categoryRepository.find({ relations: ['parentCategory', 'childCategories', 'product'] });
  }

	async findOne(id: number): Promise<Category | undefined> {
		return this.categoryRepository.findOne({
			where: {
				id,
			},
		});
	}

	async update(id: number, updateCategoryInput: UpdateCategoryInput): Promise<UpdateResult> {
		return this.categoryRepository.update(id, {
			...updateCategoryInput,

		});
	}

	async remove(id: number): Promise<DeleteResult> {
		return this.categoryRepository.delete(id);
	}
}
