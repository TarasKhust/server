import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('brand')
export class BrandEntity extends BaseEntity {
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
  metaTagsDescription: string;

  @Field(() => [String])
  @Column('simple-array')
  metaTags: string[];

  @Field(() => Date)
  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

}
