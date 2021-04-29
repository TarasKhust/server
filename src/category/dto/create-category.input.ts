import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsString } from 'class-validator';
import { Category } from '../entities/category.entity';

@InputType()
export class CreateCategoryInput {

  @IsString()
  @Field(() => String)
  name: string;

  @IsString()
  @Field(() => String)
  description: string;

  @Field(() => String, { nullable: true, defaultValue: '' })
  seoUrl: string;

  @Field(() => Boolean, { defaultValue: true, nullable: true })
  status: boolean;

  @IsString()
  @Field(() => String, { nullable: true })
  metaTagDescription: string;

  @IsArray()
  @Field(() => [String], { nullable: true })
  metaDataTagKeyword: string[];

  @Field(() => Number, { nullable: true })
  parentCategory: Category;

  @Field(() => [Number], { nullable: true })
  childCategories: Category[];

}
