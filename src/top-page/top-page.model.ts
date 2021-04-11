import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

export class HhData {
	@Field()
	@Column()
	count: number;

	@Field()
	@Column()
	juniorSalary: number;

	@Field()
	@Column()
	middleSalary: number;

	@Field()
	@Column()
	seniorSalary: number;
}

export class TopPageAdvantage {
	@Field()
	@Column()
	title: string;

	@Field()
	@Column()
	description: string;
}

@ObjectType()
@Entity('top_page')
export class TopPageModel extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn('uuid')
	_id: string;

	@Field()
	@Column({ type: 'enum', enum: TopLevelCategory })
	firstCategory: TopLevelCategory;

	@Field()
	@Column()
	secondCategory: string;

	@Field()
	@Column({ unique: true })
	alias: string;

	@Field()
	@Column()
	title: string;

	@Field()
	@Column()
	metaTitle: string;

	@Field()
	@Column()
	metaDescription: string;

	@Field()
	@Column()
	category: string;

	@Field(() => HhData)
	@Column(() => HhData)
	hh?: HhData;

	@Field(() => [TopPageAdvantage])
	@Column({ type: 'simple-array' })
	advantages: TopPageAdvantage[];

	@Field()
	@Column()
	seoText: string;

	@Field()
	@Column()
	tagsTitle: string;

	@Field(() => [String])
	@Column({ type: 'simple-array' })
	tags: string[];
}
