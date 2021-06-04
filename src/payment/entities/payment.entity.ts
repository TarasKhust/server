import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from '../../customer/entities/customer.entity';
import { Order } from '../../order/entities/order.entity';

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

  @Field(() => [Order], { nullable: true })
  @OneToMany(() => Order, (order) => order.payment, {
    nullable: true,
  })
  order: Order[];

}
