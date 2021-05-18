import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmpty, IsOptional, IsString } from 'class-validator';
import { ProductEntity } from '../../product/product.entity';
import { AttributeEntity } from '../../attribute/entities/attribute.entity';

@ObjectType()
@Entity('attribute_group')
export class AttributeGroupEntity extends BaseEntity {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  @IsOptional({ always: true })
  id: number;

  @Field(() => String)
  @IsString({ always: true })
  @IsEmpty({ always: true, message: 'hey...' })
  @Column()
  name: string;

  @Field(() => [AttributeEntity])
  @ManyToMany(() => AttributeEntity, attribute => attribute.attribute_group, { nullable: true })
  attribute?: AttributeEntity[];

  @ManyToMany(() => ProductEntity, album => album.attribute_group, { nullable: true })
  product: ProductEntity[];

}
