import { Field, ObjectType } from '@nestjs/graphql';
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ProductEntity } from '../../product/product.entity';

@ObjectType()
export class Attribute {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  @IsOptional({ always: true })
  id: number;

  @Field(() => String)
  @Column({ length: 150 })
  @IsString({ always: true })
  @IsEmpty({ always: true, message: 'hey...' })
  name: string;

  @Column({ type: 'int' })
  @IsNumber()
  @IsEmpty({ always: true, message: 'hey...' })
  size: number;

  @ManyToOne(
      () => ProductEntity,
      (product: ProductEntity) => product.image,
      { onUpdate: 'CASCADE', onDelete: 'CASCADE', nullable: true },
  )
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}
