import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { IsEmail, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

@ObjectType('Customer')
@Entity('Customer')
export class Customer {

  @IsNumber()
  @Field(() => Int)
  @Column()
  id: number;

  @IsString()
  @Column()
  @Field(() => String)
  name: string;

  @IsPhoneNumber('UA')
  @Column()
  @Field(() => String)
  phone: string;

  @IsEmail()
  @Column()
  @Field(() => String)
  email: string;
}
