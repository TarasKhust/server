import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity, OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { BrandEntity } from '../brand/entities/brand.entity';

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
	name: string;

	@Field(() => Number)
	@Column()
	price: number;

	@Field(() => Number)
	@Column()
	count: number;

	@Field(() => String)
	@Column()
	vendor: string;

	@Field(() => BrandEntity)
	@OneToMany(() => BrandEntity, brand => brand.owner, {
		onDelete: 'CASCADE', onUpdate: 'CASCADE',
	})
	brands: BrandEntity[];

	@Field(() => String)
	@Column()
	description: string;

	@Field(() => [String])
	@Column('simple-array')
	categories: string[];

	@Field(() => [String])
	@Column('simple-array')
	tags: string[];

	@Field(() => Date)
	@CreateDateColumn({ nullable: true })
	createdAt: Date;

	@Field(() => Date)
	@UpdateDateColumn({ nullable: true })
	updatedAt: Date;

}
