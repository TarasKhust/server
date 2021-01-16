import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  DefaultValuePipe,
  ParseBoolPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ValidationPipe } from '../validation/validation.pipe';
import { ParseIntPipe } from '../validation/parse-int.pipe';
import { RolesGuard } from '../roles.guard';
import { Roles } from '../roles.decorator';
import { LoggingInterceptor } from '../interceptor/logging.interceptor';
import { TimeoutInterceptor } from '../interceptor/timeout.interceptor';
import { User } from '../decorators/user.decorator';
import { Auth } from '../decorators/auth.decorator';

@Controller('cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @UseInterceptors(TimeoutInterceptor)
  @Roles('admin')
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get('users')
  @Get()
  async findAll(
    @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe)
    activeOnly: boolean,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
  ) {
    return this.catsService.findAll({ activeOnly, page });
  }
  async findOne(@User('firstName') firstName: string) {
    console.log(`Hello ${firstName}`);
  }
  // @Get()
  // async findOne(
  //   @User(new ValidationPipe({ validateCustomDecorators: true }))
  //   user: UserEntity,
  // ) {
  //   console.log(user);
  // }
}
