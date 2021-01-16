import { Controller, Get, HttpCode, Post, Redirect } from '@nestjs/common';

@Controller('people')
export class PeopleController {
  @Post()
  create(): object {
    return {
      name: 'Taras',
      age: '12',
    };
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
