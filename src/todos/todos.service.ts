import { Injectable } from '@nestjs/common';
import { Todo } from './todos.entity';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from './todos.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  public async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  public async findById(id: number): Promise<Todo | null> {
    return await this.todoRepository.findOneOrFail(id);
  }

  public async create(todo: CreateTodoDto): Promise<Todo> {
    return await this.todoRepository.save(todo);
  }

  public async update(
    id: number,
    newValue: CreateTodoDto,
  ): Promise<Todo | null> {
    const todo = await this.todoRepository.findOneOrFail(id);
    if (!todo.id) {
      // tslint:disable-next-line:no-console
      console.error("Todo doesn't exist");
    }
    await this.todoRepository.update(id, newValue);
    return await this.todoRepository.findOne(id);
  }

  public async delete(id: number): Promise<DeleteResult> {
    return await this.todoRepository.delete(id);
  }
}
