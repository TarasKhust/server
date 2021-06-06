import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../../order/entities/order.entity';

@Entity('orderProduct')
@ObjectType('orderProduct')
export class OrderProduct {
  @PrimaryGeneratedColumn()
  orderProductId: number;

  @ManyToOne(() => Order, (order) => order.orderProduct, {
    nullable: true,
  })
  order: Order;

  @Column()
  product_id: number;

  @Column()
  name: string;

  @Column()
  model: number;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  total: number;
}
