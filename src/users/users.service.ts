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

  async getUserByEmail(email: string) {
    return this.userRepository.findOne({ email });
  }

  async getUserById(userId: string) {
    return this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
