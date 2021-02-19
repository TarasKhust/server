import {Body, Injectable, ParseArrayPipe} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from "./dto/create-user.dto";
import * as jwt from 'jsonwebtoken';

import { UserEntity } from './user1.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  createBulk(
      @Body(new ParseArrayPipe({ items: CreateUserDto }))
          createUserDtos: CreateUserDto[],
  ) {
    return 'This action adds new users';
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async findOnes(username: string): Promise<{ password: string; userId: number; username: string }> {
    return this.users.find(user => user.username === username);
  }

  createToken({ id, email }: UserEntity) {
    return jwt.sign({ id, email }, 'secret');
  }

  createUser(email: string) {
    return this.userRepo.create({ email }).save();
  }

  getUserByEmail(email: string) {
    return this.userRepo.findOne({ email });
  }
}
