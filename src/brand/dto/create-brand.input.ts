import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBrandInput {

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String, { nullable: true })
  metaTagsDescription: string;

  @Field(() => [String], { nullable: true })
  metaTags: string[];

}
