import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNumber, IsPhoneNumber, IsString } from 'class-validator';
import { Order } from '../../order/entities/order.entity';
import { Shipping } from '../../shipping/entities/shipping.entity';

@ObjectType('customer')
@Entity('customer')
export class Customer {

  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  name: string;

  @IsPhoneNumber('UA')
  @Column()
  phone: string;

  @IsEmail()
  @Column()
  email: string;

  @OneToOne(() => Shipping, {
	nullable: true, cascade: true,
  })
  @JoinColumn()
  shipping: Shipping;

  @ManyToMany(() => Order, (order: Order) => order.customer, {
    nullable: true,
  })
  order: Order[];

}
