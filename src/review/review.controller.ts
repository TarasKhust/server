import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';
import { ReviewService } from './review.service';
import { REVIEW_NOT_FOUNT } from './review.constans';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {
	}

	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'>): Promise<CreateReviewDto> {
		return this.reviewService.create(dto);

	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<void> {
		const deletedDoc = await this.reviewService.delete(id);

		if (!deletedDoc) {
			throw new HttpException(REVIEW_NOT_FOUNT, HttpStatus.NOT_FOUND);
		}
	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string): Promise<ReviewModel[]> {

		return this.reviewService.findByProductId(productId);

	}
}
