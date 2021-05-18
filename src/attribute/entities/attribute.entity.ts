import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
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

	@Field(() => [AttributeGroupEntity])
	@ManyToMany(() => AttributeGroupEntity, album => album.attribute, { cascade: true, nullable: true })
	@JoinTable()
	attribute_group: AttributeGroupEntity[];

	@Field(() => [ProductEntity])
	@ManyToMany(
		() => ProductEntity,
		(product: ProductEntity) => product.attribute, { nullable: true }
	)
	product: ProductEntity[];
}
