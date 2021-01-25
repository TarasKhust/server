import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseEntity, Column, Entity } from "typeorm";

@Entity()
@ObjectType()
export class VpsManageListEntity extends BaseEntity{
    @Field(() => Int, { description: 'Example field (placeholder)' })
    @Column()
    exampleField: number;

    @Field({ nullable: true })
    @Column()
    firstName?: string;

    @Field({ nullable: true })
    @Column()
    lastName?: string;

}
