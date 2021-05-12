import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity, ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { BrandEntity } from '../brand/entities/brand.entity';
import { Category } from '../category/entities/category.entity';
import { AttributeGroupEntity } from '../attributeGroup/entities/attribute-group.entity';
import { AttributeEntity } from '../attribute/entities/attribute.entity';

@ObjectType()
@Entity('product')
export class ProductEntity extends BaseEntity {
	@Field(() => String)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field(() => [String], { nullable: true })
	@Column('text', { array: true, nullable: true })
	image: string[];

	@Field(() => String)
	@Column()
	name: string;

	@Field(() => Number)
	@Column()
	price: number;

	@Field(() => Number)
	@Column()
	count: number;

	@Field(() => Number)
	@Column()
	minimalCount: number;

	@Field(() => String)
	@Column()
	vendor: string;

	@Field(() => String)
	@Column()
	statusExist: string;

	@Field(() => Boolean, { nullable: true })
	@Column({ nullable: true })
	status: boolean;

	@Field(() => BrandEntity)
	@ManyToOne(() => BrandEntity, brand => brand.product, {
		onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: true,
	})
	brand?: BrandEntity;

	@Field(() => AttributeGroupEntity)
	@ManyToOne(() => AttributeGroupEntity, attribute => attribute.product, {
		onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: true,
	})
	attribute_group?: AttributeGroupEntity;

	@Field(() => AttributeEntity)
	@ManyToOne(() => AttributeEntity, attribute => attribute.product, {
		onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: true,
	})
	attribute?: AttributeEntity;

	@Field(() => Category)
	@ManyToOne(() => Category, category => category.product, {
		onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: true,
	})
	category?: Category;

	@Field(() => String)
	@Column()
	description: string;

	@Field(() => [String])
	@Column('simple-array')
	tags: string[];

	@Field(() => String, { nullable: true })
	@Column({ nullable: true })
	metaDescription: string;

	@Field(() => [String], { nullable: true })
	@Column('simple-array', { nullable: true })
	metaDataTagKeyword: string[];

	@Field(() => String, { nullable: true })
	@Column({ nullable: true })
	seoUrl: string;

	@Field(() => Date)
	@CreateDateColumn({ nullable: true })
	createdAt: Date;

	@Field(() => Date)
	@UpdateDateColumn({ nullable: true })
	updatedAt: Date;

}
