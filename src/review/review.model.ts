import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('review')
export class ReviewModel extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn('uuid')
	_id: string;

	@Column()
	name: string;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	rating: number;

	@Column({ type: 'timestamptz' })
	createdAt: Date;
}
