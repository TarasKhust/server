import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import * as jwt from "jsonwebtoken";
import { UserRepository } from "./user.repository";
import { CreateUserInput } from "./dto/create-user.input";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(UserRepository)
      private userRepository: UserRepository

  ) {

  }

  createUser2Input(createUserInput: CreateUserInput) {
    const { email, password } = createUserInput;

    return this.userRepository.create({ email }).save();
  }

  createUser(email: string, password: string) {
    return this.userRepository.create({ email, password }).save();
  }

  crateToken({ id, email }: User) {
    return jwt.sign({ id, email }, "secret");
  }

  getUserByEmail(email: string, password: string) {
    return this.userRepository.findOne({ email, password });
  }
}
