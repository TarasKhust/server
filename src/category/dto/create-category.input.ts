import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => [String])
  metaDataTag: string[];

  @Field(() => [String])
  metaDataTagKeyword: string[];

}
