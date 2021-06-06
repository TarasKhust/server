import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType('shipping')
@Entity('shipping')
export class Shipping {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  city: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  department: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  street: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  houseNumber: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  apartmentNumber: string;

}
