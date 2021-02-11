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
import { Roles } from '../decorators/roles.decorator';
import { LoggingInterceptor } from '../interceptor/logging.interceptor';
import { TimeoutInterceptor } from '../interceptor/timeout.interceptor';
import { User } from '../decorators/user.decorator';
import { Auth } from '../decorators/auth.decorator';
import { Role } from "../enums/role.enum";
import { RolesGuard } from "../role.guard";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";

@Controller('cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseInterceptors(TimeoutInterceptor)
  @Roles(Role.Admin)
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
  })
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
