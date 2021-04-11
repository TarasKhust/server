import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('review')
export class ReviewModel extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn('uuid')
	_id: string;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column()
	title: string;

	@Field()
	@Column()
	description: string;

	@Field()
	@Column()
	rating: number;

	@Field()
	@Column({ type: 'timestamptz' })
	createdAt: Date;

	@Field()
	@Column()
	productId: string;
}
