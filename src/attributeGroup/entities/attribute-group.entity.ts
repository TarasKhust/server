import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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
		(product: AttributeEntity) => product.attribute_group,
		{ onUpdate: 'CASCADE', onDelete: 'CASCADE', nullable: true },
  )
  attribute?: AttributeEntity[];

  @ManyToMany(() => ProductEntity, album => album.attribute_group, { nullable: true })
  product: ProductEntity[];

}