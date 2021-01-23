import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  text: string;

  @Column()
  name: string;

}
