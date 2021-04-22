import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

class ProductCharacteristic {
	name: string;

	value: string;
}
@ObjectType()
@Entity('product')
export class ProductEntity extends BaseEntity {
	@Field(() => String)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field(() => String)
	@Column()
	image: string;

	@Field(() => String)
	@Column()
	title: string;

	@Field(() => String)
	@Column()
	price: string;

	@Field(() => Number)
	@Column()
	oldPrice: number;

	@Field(() => Number)
	@Column()
	credit: number;

	@Field(() => Number)
	@Column()
	calculatedRating: number;

	@Field(() => String)
	@Column()
	description: string;

	@Field(() => String)
	@Column()
	advantages: string;

	@Field(() => String)
	@Column()
	disAdvantages: string;

	@Field(() => [String])
	@Column('simple-array')
	categories: string[];

	@Field(() => [String])
	@Column('simple-array')
	tags: string[];

	@Field(() => [ProductCharacteristic])
	@Column('simple-array')
	characteristics: ProductCharacteristic;
}
