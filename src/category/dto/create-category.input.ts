import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(type => String)
  metaDataTag: string[];

  @Field(type => String)
  metaDataTagKeyword: string[];

  @Field(type => String)
  tag: string[];
}
