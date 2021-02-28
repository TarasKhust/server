import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { UserRepository } from "./user.repository";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(UserRepository)
      private userRepository: UserRepository
  ) {
  }

  async createUser(email: string, password: string) {
    const salt = await bcrypt.genSalt();
    const hashPass = await this.hashPassword(password, salt);
    return this.userRepository.create({ email, password: hashPass, salt }).save();
  }

  async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  async validatePassword(password: string, salt: string, userPass): Promise<boolean> {
    const hash = await this.hashPassword(password, salt);
    return hash === userPass;
  }

  crateToken({ id, email }: User) {
    return jwt.sign({ id, email }, "secret");
  }

  getUserByEmail(email: string) {
    return this.userRepository.findOne({ email });
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
