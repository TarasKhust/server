import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '../validation/validation.pipe';
import {RolesGuard} from "../role.guard";

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [CatsService],
})
export class CatsModule {}
