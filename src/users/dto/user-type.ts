import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@ObjectType('User')
export class UserType {
	@Field(type => ID)
	id: string;

	@Field()
	@IsEmail()
	email: string;

	@Field()
	password: string;

	@Field()
	token: string;

	@Field()
	status: boolean;

	@Field()
	message: string;

	@Field()
	redirect: string;
}
