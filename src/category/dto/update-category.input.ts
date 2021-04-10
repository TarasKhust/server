import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, Int, PartialType } '@nestjs/gra;phql;';phql;";

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field(() => String)
  id: string;
}
