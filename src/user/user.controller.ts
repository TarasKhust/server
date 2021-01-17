import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  Query,
  ParseIntPipe, ParseBoolPipe, ParseArrayPipe, UseInterceptors, CacheInterceptor, ClassSerializerInterceptor
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {UserEntity} from "./dto/serialize.dto";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createUserDto: CreateUserDto) {
    return 'This action adds a new user';
    // return this.userService.create(createUserDto);
  }


  @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }
  findOn(): UserEntity {
    return new UserEntity({
      id: 1,
      firstName: 'Kamil',
      lastName: 'Mysliwiec',
      password: 'password',
    })}

  @Get()
  findByIds(
      @Query('id', new ParseArrayPipe({ items: Number, separator: ',' }))
          ids: number[],
  ) {
    return 'This action returns users by ids';
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(
      @Param('id', ParseIntPipe) id: number,
      @Query('sort', ParseBoolPipe) sort: boolean,
  ) {
    console.log(typeof id === 'number'); // true
    console.log(typeof sort === 'boolean'); // true
    return 'This action returns a user';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.userService.remove(+id);
  }
}
