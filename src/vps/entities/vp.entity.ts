import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Vp {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
