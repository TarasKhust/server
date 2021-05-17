import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class FindAttributeGroupInput {

	@Field(() => Int)
	id: number;

	@Field(() => String)
	@IsNotEmpty()
	name: string;

}
