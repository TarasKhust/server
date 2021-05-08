import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmpty, IsOptional, IsString } from 'class-validator';
import { ProductEntity } from '../../product/product.entity';

@ObjectType()
@Entity('attribute')
export class Attribute extends BaseEntity {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  @IsOptional({ always: true })
  id: number;

  @Field(() => String)
  @Column({ length: 150 })
  @IsString({ always: true })
  @IsEmpty({ always: true, message: 'hey...' })
  name: string;

  @Field(() => String, { nullable: true })
  @OneToMany(
		() => ProductEntity,
		(product: ProductEntity) => product.image,
		{ onUpdate: 'CASCADE', onDelete: 'CASCADE', nullable: true },
  )
  @JoinColumn({ name: 'id' })
  product: ProductEntity[];
}
