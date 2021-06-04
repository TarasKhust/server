import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from '../../customer/entities/customer.entity';

@ObjectType('payment')
@Entity('payment')
export class Payment {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.payment, {
	nullable: true,
  })
  customer: Customer[];

}
