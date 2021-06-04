import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ProductEntity } from '../../product/product.entity';
import { Customer } from '../../customer/entities/customer.entity';
import { Shipping } from '../../shipping/entities/shipping.entity';
import { Payment } from '../../payment/entities/payment.entity';

@ObjectType('order')
@Entity('order')
export class Order {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  order_id: number;

  @Field(() => [ProductEntity], { nullable: true })
  @OneToMany(() => ProductEntity, (product: ProductEntity) => product.order, {
	nullable: true,
  })
  product: ProductEntity[];

  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer: Customer) => customer.order, {
	nullable: true,
  })
  customer: Customer[];

  @Field(() => [Shipping], { nullable: true })
  @OneToMany(() => Shipping, (shipping: Shipping) => shipping.order, {
	nullable: true,
  })
  shipping: Shipping[];

  @Field(() => [Payment], { nullable: true })
  @OneToMany(() => Payment, (payment: Payment) => payment.order, {
	nullable: true,
  })
  payment: Order[];

  @Field(() => Date)
  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @Field(() => Int)
  total: number;
}
