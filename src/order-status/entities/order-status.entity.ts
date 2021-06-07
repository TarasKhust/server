import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../../order/entities/order.entity';

@Entity('order_status')
@ObjectType('order_status')
export class OrderStatus {

  @PrimaryGeneratedColumn()
  orderStatusId: number;

  @Column()
  name: string;

  @OneToMany(() => Order, (order) => order.orderStatus)
  order: Order[];

}
