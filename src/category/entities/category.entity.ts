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

  @Field(() => String)
  @Column()
  metaTagDescription: string;

  @Field(() => String)
  @Column('simple-array')
  metaDataTagKeyword: string[];

  @Field(() => String)
  @OneToMany(() => ProductEntity, (product: ProductEntity) => product.category, {
	nullable: true,
  })
  product: ProductEntity[];

}
