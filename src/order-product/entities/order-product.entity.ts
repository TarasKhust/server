import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../../order/entities/order.entity';

@Entity('orderProducts')
@ObjectType('orderProducts')
export class OrderProduct {
  @PrimaryGeneratedColumn()
  orderProductId: number;

  @Column()
  product_id: string;

  @Column()
  name: string;

  @Column()
  vendor: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  total: number;

  @ManyToMany(() => Order, (order: Order) => order.orderProducts, {
    nullable: true,
  })
  order: Order[];
}
