import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNumber, IsPhoneNumber, IsString } from 'class-validator';
import { Shipping } from '../../shipping/entities/shipping.entity';

@ObjectType('customer')
@Entity('customer')
export class Customer {

  @IsNumber()
  @Field(() => Int)
  @PrimaryGeneratedColumn()
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

  @Field(() => [Shipping], { nullable: true })
  @OneToMany(() => Shipping, (shipping: Shipping) => shipping.customer, {
	nullable: true,
  })
  shipping: Customer[];

}
