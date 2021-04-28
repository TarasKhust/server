import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsString } from 'class-validator';

@InputType()
export class CreateCategoryInput {

  @IsString()
  @Field(() => String)
  name: string;

  @IsString()
  @Field(() => String)
  description: string;

  @IsString()
  @Field(() => String)
  metaTagDescription: string;

  @IsArray()
  @Field(() => [String], { nullable: true })
  metaDataTagKeyword: string[];

}
