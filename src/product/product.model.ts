import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

class ProductCharacteristic {
	name: string;

	value: string;
}
@ObjectType()
@Entity('product')
export class ProductModel extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn('uuid')
	_id: string;

	@Field()
	@Column()
	image: string;

	@Field()
	@Column()
	title: string;

	@Field()
	@Column()
	price: string;

	@Field()
	@Column()
	oldPrice: number;

	@Field()
	@Column()
	credit: number;

	@Field()
	@Column()
	calculatedRating: number;

	@Field()
	@Column()
	description: string;

	@Field()
	@Column()
	advantages: string;

	@Field()
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
