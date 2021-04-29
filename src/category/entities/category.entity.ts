import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { ProductEntity } from '../../product/product.entity';

@ObjectType()
@Entity()
export class Category {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  seoUrl: string;

  @Field(() => Boolean, { defaultValue: true, nullable: true })
  @Column({ select: true, nullable: true })
  status: boolean;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  metaTagDescription: string;

  @Field(() => String, { nullable: true })
  @Column('simple-array', { nullable: true })
  metaDataTagKeyword: string[];

  @Field(() => String, { nullable: true })
  @OneToMany(() => ProductEntity, (product: ProductEntity) => product.category, {
	nullable: true,
  })
  product: ProductEntity[];

}
