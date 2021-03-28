import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { CategoryService } from "./category.service";
import { Category } from "./entities/category.entity";
import { CreateCategoryInput } from "./dto/create-category.input";
import { UpdateCategoryInput } from "./dto/update-category.input";

@Resolver(of => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category)
  createCategory(@Args("createCategoryInput") createCategoryInput: CreateCategoryInput): Promise<CreateCategoryInput> {
    return this.categoryService.createCategory(createCategoryInput);
  }

  @Query(() => [Category], { name: "category" })
  findAll() {
    return this.categoryService.findAll();
  }

  @Query(() => Category, { name: "category" })
  findOne(@Args("id", { type: () => String }) id: string) {
    return this.categoryService.findOne(id);
  }

  @Mutation(() => Category)
  updateCategory(@Args("updateCategoryInput") updateCategoryInput: UpdateCategoryInput) {
    return this.categoryService.update(updateCategoryInput.id, updateCategoryInput);
  }

  @Mutation(() => Category)
  removeCategory(@Args("id", { type: () => String }) id: string) {
    return this.categoryService.remove(id);
  }
}
