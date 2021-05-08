import { GenericEntity } from 'src/generic/generic.entity';
import {
	PrimaryGeneratedColumn,
	Column,
	Entity,
	JoinColumn, OneToOne,
} from 'typeorm';
import { IsOptional, IsString, IsEmpty, IsNumber } from 'class-validator';
import { ProductEntity } from 'src/product/product.entity';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'files' })
export class FileEntity extends GenericEntity {
	@PrimaryGeneratedColumn()
	@IsOptional({ always: true })
	id: number;

	@Column({ length: 150 })
	@IsString({ always: true })
	@IsEmpty({ always: true, message: 'hey...' })

	original_name: string;

	@Column({ length: 50 })
	@IsString({ always: true })
	@IsEmpty({ always: true, message: 'hey...' })

	current_name: string;

	@Column({ length: 50 })
	@IsString({ always: true })
	@IsEmpty({ always: true, message: 'hey...' })
	extention: string;

	@Column({ type: 'int' })
	@IsNumber()
	@IsEmpty({ always: true, message: 'hey...' })
	size: number;

	@OneToOne(
		() => ProductEntity,
		(product: ProductEntity) => product.image,
		{ onUpdate: 'CASCADE', onDelete: 'CASCADE', nullable: true },
	)
	@JoinColumn({ name: 'product_id' })
	product: ProductEntity;

}
