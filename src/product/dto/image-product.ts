import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ImageProduct {

	@Field(() => String)
	url: string;

	@Field(() => String)
	name: string;

}
