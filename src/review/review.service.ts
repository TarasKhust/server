import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ReviewService {
	constructor(@InjectRepository(ReviewModel)
				private readonly reviewModel: Repository<ReviewModel>) { }

	async create(dto: CreateReviewDto): Promise<CreateReviewDto> {
		return this.reviewModel.create(dto);
	}

	async delete(id: string): Promise<Promise<DeleteResult> | null> {
		return this.reviewModel.delete(id);
	}

	async findByProductId(productId: string): Promise<ReviewModel[]> {
		return this.reviewModel.find({ productId });
	}

	async deleteByProductId(productId: string): Promise<DeleteResult> {
		return this.reviewModel.delete(productId);
	}
}
