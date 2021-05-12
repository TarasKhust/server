import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '../../product/product.entity';
import { AttributeGroupEntity } from '../../attributeGroup/entities/attribute-group.entity';

@ObjectType()
@Entity('attribute')
export class AttributeEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  name: string;

  @Field(() => AttributeGroupEntity)
  @ManyToOne(() => AttributeGroupEntity, attribute => attribute.attribute, {
	onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: true,
  })
  @JoinTable({ name: 'attribute_id' })
  attribute_group?: AttributeGroupEntity;

  @Field(() => [ProductEntity], { nullable: true })
  @OneToMany(
		() => ProductEntity,
		(product: ProductEntity) => product.attribute_group,
		{ onUpdate: 'CASCADE', onDelete: 'CASCADE', nullable: true },
  )
  product: ProductEntity[];
}
