import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNumber, IsPhoneNumber, IsString } from 'class-validator';
import { Order } from '../../order/entities/order.entity';

@ObjectType('customer')
@Entity('customer')
export class Customer {

  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  firstName: string;

  @IsString()
  @Column()
  lastName: string;

  @IsString()
  @Column()
  surName: string;

  @IsPhoneNumber('UA')
  @Column()
  phone: string;

  @IsEmail()
  @Column()
  email: string;

  @ManyToMany(() => Order, (order: Order) => order.customer, {
    nullable: true,
  })
  order: Order[];

}
