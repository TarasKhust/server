import { ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, JoinTable, ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from '../../product/product.entity';
import { Customer } from '../../customer/entities/customer.entity';
import { Shipping } from '../../shipping/entities/shipping.entity';
import { Payment } from '../../payment/entities/payment.entity';

@ObjectType('order')
@Entity('order')
export class Order extends BaseEntity {

  @PrimaryGeneratedColumn()
  order_id: number;

  @ManyToOne(() => ProductEntity, (product: ProductEntity) => product.order, {
	nullable: true,
  })
  product: ProductEntity;

  @ManyToMany(() => Customer, (customer: Customer) => customer.order, {
	nullable: true, cascade: true,
  })
  @JoinTable()
  customer: Customer[];

  @OneToMany(() => Shipping, (shipping: Shipping) => shipping.order, {
	nullable: true,
  })
  shipping: Shipping[];

  @OneToMany(() => Payment, (payment: Payment) => payment.order, {
	nullable: true,
  })
  payment: Payment[];

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @Column()
  total: number;
}
