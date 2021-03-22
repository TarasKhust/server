import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateCategoryInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Array)
  metaDataTag: string[];

  @Field(() => Array)
  metaDataTagKeyword: string[];

  @Field(() => Array)
  tag: string[];
}
