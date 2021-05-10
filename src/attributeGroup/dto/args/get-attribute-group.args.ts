import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetAttributeGroupArgs {

	@Field(() => Number)
	@IsNotEmpty()
	id: number;

}
