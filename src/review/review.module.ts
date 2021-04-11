import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewModel } from './review.model';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewModel])],
  controllers: [ReviewController],
})
export class ReviewModule {}
