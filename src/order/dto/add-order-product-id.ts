import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddOrderProductId {
	@Field(() => String)
	id: string;
}
