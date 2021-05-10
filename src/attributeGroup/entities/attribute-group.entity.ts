import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmpty, IsOptional, IsString } from 'class-validator';
import { ProductEntity } from '../../product/product.entity';
import { AttributeEntity } from '../../attribute/entities/attribute.entity';

@ObjectType()
@Entity('attribute_group')
export class AttributeGroupEntity extends BaseEntity {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  @IsOptional({ always: true })
  id: number;

  @Field(() => String)
  @IsString({ always: true })
  @IsEmpty({ always: true, message: 'hey...' })
  @Column()
  name: string;

  @Field(() => [AttributeEntity], { nullable: true })
  @OneToMany(
		() => AttributeEntity,
		(product: AttributeEntity) => product.attributeGroup,
		{ onUpdate: 'CASCADE', onDelete: 'CASCADE', nullable: true },
  )
  attribute?: AttributeEntity[];

  @Field(() => [ProductEntity], { nullable: true })
  @OneToMany(
		() => ProductEntity,
		(product: ProductEntity) => product.attributeGroup,
		{ onUpdate: 'CASCADE', onDelete: 'CASCADE', nullable: true },
  )
  product: ProductEntity[];
}
