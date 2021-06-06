import { ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, JoinTable, ManyToMany, ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from '../../product/product.entity';
import { Customer } from '../../customer/entities/customer.entity';
import { Payment } from '../../payment/entities/payment.entity';

@ObjectType('order')
@Entity('order')
export class Order extends BaseEntity {

  @PrimaryGeneratedColumn()
  order_id: number;

  @ManyToMany(() => ProductEntity, (product: ProductEntity) => product.order, {
	nullable: true, cascade: true,
  })
  @JoinTable()
  product: ProductEntity[];

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
