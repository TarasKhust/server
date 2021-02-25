import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import * as jwt from "jsonwebtoken";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {

  }

  createUser(email: string) {
    return this.userRepo.create({ email }).save();
  }

  crateToken({ id, email }: User) {
    return jwt.sign({ id, email }, "secret");
  }

  findAll() {
    return `This action returns all users`;
  }

  getUserByEmail(email: string) {
    return this.userRepo.findOne({ email });
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
