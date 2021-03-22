import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text", default: "" })
  name: string;

  @Column({ type: "text", default: "" })
  description: string;

  @Column({ type: "text", default: "" })
  metaDataTag: string[]

  @Column({ type: "text", default: "" })
  metaDataTagKeyword: string[]

  @Column({ type: "text", default: "" })
  tag: string[]
}
