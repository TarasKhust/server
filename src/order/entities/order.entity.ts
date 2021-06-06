import { ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, JoinTable, ManyToMany, ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from '../../customer/entities/customer.entity';
import { Payment } from '../../payment/entities/payment.entity';
import { OrderProduct } from '../../order-product/entities/order-product.entity';

@ObjectType('order')
@Entity('order')
export class Order extends BaseEntity {

  @PrimaryGeneratedColumn()
  order_id: number;

  @OneToMany(() => OrderProduct, (product) => product.order, {
	nullable: true, cascade: true,
  })
  orderProduct: OrderProduct[];

  @ManyToMany(() => Customer, (customer: Customer) => customer.order, {
	nullable: true, cascade: true,
  })
  @JoinTable()
  customer: Customer[];

  @ManyToOne(() => Payment, (payment: Payment) => payment.order, {
	nullable: true, cascade: true,
  })
  payment: Payment;

  @Column({ nullable: true })
  city?: string;

  @Column({ nullable: true })
  department?: string;

  @Column({ nullable: true })
  street?: string;

  @Column({ nullable: true })
  houseNumber?: string;

  @Column({ nullable: true })
  apartmentNumber?: string;

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @Column()
  total: number;
}
