import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity, ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
	JoinTable,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { BrandEntity } from '../brand/entities/brand.entity';
import { Category } from '../category/entities/category.entity';

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
		onDelete: 'CASCADE', onUpdate: 'CASCADE',
	})
	@JoinTable({ name: 'id' })
	brand: BrandEntity;

	@Field(() => String)
	@Column()
	description: string;

	@Field(() => Category)
	@ManyToOne(() => Category, category => category.product, {
		onDelete: 'CASCADE', onUpdate: 'CASCADE',
	})
	@JoinTable({ name: 'id' })
	category: Category;

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
