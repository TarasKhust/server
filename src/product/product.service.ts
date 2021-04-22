import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(ProductEntity)
		private productRepository: Repository<ProductEntity>
	) {
	}

	async create(createProduct: CreateProductInput): Promise<ProductEntity> {
		const newProduct = this.productRepository.create(createProduct);

		return this.productRepository.save(newProduct);
	}

	async findAll(): Promise<ProductEntity[]> {
		return this.productRepository.find();
	}

	async findById(id: string): Promise<ProductEntity | undefined> {
		return this.productRepository.findOne({
			where: {
				id,
			},
		});
	}
}
