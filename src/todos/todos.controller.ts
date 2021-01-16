import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoRO } from './todos.interface';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  findAll() {
    return this.todosService.findAll();
  }
  @Post()
  create(@Body() todos: TodoRO) {
    return this.todosService.create(todos);
  }
}
