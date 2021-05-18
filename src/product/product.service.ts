import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateAttributeInput } from '../attribute/dto/update-attribute.input';
import { AttributeService } from '../attribute/attribute.service';
import { AttributeEntity } from '../attribute/entities/attribute.entity';

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(ProductEntity)
		private productRepository: Repository<ProductEntity>,
		private attributeService: AttributeService
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

	async findById(id: string): Promise<ProductEntity> {
		const attributeAll = await this.attributeService.findAll();

		const product = await this.productRepository.findOneOrFail({
			where: {
				id,
			},
			relations: ['brand', 'category', 'attribute', 'attribute_group'],
		});

		product.productAttribute = await this.adapterAttribute(attributeAll, product);

		return product;
	}

	private adapterAttribute(attributeAll: AttributeEntity[], product: ProductEntity) {

		const objectOfArray: { attribute_group: string; attribute: string; }[] = [];

		attributeAll.filter(({ id }) => product.attribute?.find((value) => value.id === id)).forEach((attribute) => {
			attribute.attribute_group.forEach((attribute_group) => {

				objectOfArray.push(
					{ attribute_group: attribute_group.name,
						attribute: attribute.name }
				);

			});
		});

		return objectOfArray;
	}

	async update(id: number, updateGroupInput: UpdateAttributeInput) {
		return `This action updates a #${id} group`;
	}

	async deleteById(id: string): Promise<DeleteResult> {
		return this.productRepository.delete(id);
	}
}
