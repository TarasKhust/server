import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Category {
  @Field(type => String)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(type => String)
  @Column()
  name: string;

  @Field(type => String)
  @Column()
  description: string;

  @Field(type => String)
  @Column('simple-array')
  metaDataTag: string[];

  @Field(type => String)
  @Column('simple-array')
  metaDataTagKeyword: string[];

  @Field(type => String)
  @Column('simple-array')
  tag: string[];
}
