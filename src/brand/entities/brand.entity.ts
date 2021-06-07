import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn, OneToMany,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { ProductEntity } from '../../product/product.entity';
import { IsString, MinLength } from 'class-validator';

@ObjectType()
@Entity('brand', {
  orderBy: {
	name: 'ASC',
	id: 'DESC',
  },
})
export class BrandEntity extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @MinLength(3)
  @IsString()
  @Field(() => String)
  @Column()
  name: string;

  @MinLength(3)
  @IsString()
  @Field(() => String)
  @Column()
  description: string;

  @MinLength(3)
  @IsString()
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  metaTagsDescription: string;

  @Field(() => [String], { nullable: true })
  @Column('simple-array', { nullable: true })
  metaTags: string[];

  @Field(() => Date)
  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @Field(() => [ProductEntity], { nullable: true })
  @OneToMany(() => ProductEntity, (product: ProductEntity) => product.brand, {
	nullable: true,
  })
  product: ProductEntity[];

}
