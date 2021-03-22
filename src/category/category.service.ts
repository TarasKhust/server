import { Injectable } from "@nestjs/common";
import { CreateCategoryInput } from "./dto/create-category.input";
import { UpdateCategoryInput } from "./dto/update-category.input";
import { CategoryRepository } from "./category.repository";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoryService {
  constructor(
      @InjectRepository(CategoryRepository)
      private categoryRepository: CategoryRepository
  ) {
  }

  public async create(createCategoryInput: CreateCategoryInput) {
    return "This action adds a new category";
  }

  public findAll() {
    return `This action returns all category`;
  }

  public findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  public update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} category`;
  }

  public remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
