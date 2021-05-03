import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { ProductEntity } from '../../product/product.entity';

@ObjectType()
@Entity()
export class Category {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  seoUrl: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  status: boolean;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  metaDescription: string;

  @Field(() => String, { nullable: true })
  @Column('simple-array', { nullable: true })
  metaDataTagKeyword: string[];

  @Field(() => [ProductEntity], { nullable: true })
  @OneToMany(() => ProductEntity, (product: ProductEntity) => product.category, {
	nullable: true,
  })
  product: ProductEntity[];

  @Field(() => Category, { nullable: true })
  @ManyToOne(() => Category, category => category.childCategories,
		{ nullable: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  parentCategory: Category;

  @Field(() => [Category], { nullable: true })
  @OneToMany(() => Category, category => category.parentCategory,
		{ nullable: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  childCategories: Category[];

}
