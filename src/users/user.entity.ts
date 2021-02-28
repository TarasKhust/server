import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import * as bcrypt from "bcrypt";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text", default: "" })
  email: string;

  @Column({ type: "text", default: "" })
  password: string;

  @Column({ type: "text", default: "" })
  salt: string;

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);

    return hash === this.password;
  }
}
