import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

  public async createCategory(createCategoryInput: CreateCategoryInput): Promise<Category> {
	const newCategory = this.categoryRepository.create(createCategoryInput);

	return this.categoryRepository.save(newCategory);
  }

  public async findAll(): Promise<Category[]> {
	return this.categoryRepository.find();
  }

  public findOne(id: string) {
	return `This action returns a #${id} category`;
  }

  public update(id: string, updateCategoryInput: UpdateCategoryInput) {
	return `This action updates a #${id} category`;
  }

  public remove(id: string) {
	return `This action removes a #${id} category`;
  }
}
