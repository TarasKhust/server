import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../../order/entities/order.entity';

@ObjectType('payment')
@Entity('payment')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Order, (order) => order.payment, {
    nullable: true,
  })
  order: Order[];

}
