import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from '../../customer/entities/customer.entity';
import { Order } from '../../order/entities/order.entity';

@ObjectType('shipping')
@Entity('shipping')
export class Shipping {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  city: string;

  @Field(() => String)
  @Column()
  department: string;

  @Field(() => String)
  @Column()
  street: string;

  @Field(() => String)
  @Column()
  houseNumber: string;

  @Field(() => String)
  @Column()
  apartmentNumber: string;

  @Field(() => [Customer])
  @OneToMany(() => Customer, customer => customer.shipping,
		{ nullable: true,
  })
  customer: Customer[];

  @Field(() => [Order])
  @OneToMany(() => Order, order => order.shipping,
		{ nullable: true,
		})
  order: Order[];

}
