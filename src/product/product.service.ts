import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateAttributeInput } from '../attribute/dto/update-attribute.input';

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(ProductEntity)
		private productRepository: Repository<ProductEntity>
	) {
	}

	async create(createProduct: CreateProductInput): Promise<ProductEntity> {
		const { vendor } = createProduct;

		const getProductVendor = await this.productRepository.findOne({
			where: {
				vendor,
			},
		});

		if (getProductVendor) {
			throw new BadRequestException(`This ${vendor} already exist`);
		}

		const newProduct = await this.productRepository.create(createProduct);

		return this.productRepository.save(newProduct);
	}

	async findAll(): Promise<ProductEntity[]> {
		return this.productRepository.find({
			relations: ['brand', 'category', 'attribute_group', 'attribute'],
		});
	}

	async findById(id: string): Promise<ProductEntity | undefined> {
		return this.productRepository.findOneOrFail({
			where: {
				id,
			},
			relations: ['brand', 'category', 'attribute', 'attribute_group'],
		});
	}

	async update(id: number, updateGroupInput: UpdateAttributeInput) {
		return `This action updates a #${id} group`;
	}

	async deleteById(id: string): Promise<DeleteResult> {
		return this.productRepository.delete(id);
	}
}
