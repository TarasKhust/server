import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { ProductEntity } from './product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { NotFoundException } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

@Resolver()
export class ProductResolver {
	constructor(private readonly productService: ProductService) {}

	@Mutation(() => ProductEntity)
	async createProduct(@Args('data') createProductInput: CreateProductInput): Promise<CreateProductInput> {
		return this.productService.create(createProductInput);
	}

	@Mutation(() => ProductEntity)
	async deleteProduct(@Args('id') id: string): Promise<DeleteResult> {
		try {
			return await this.productService.deleteById(id);
		} catch (error) {
			throw new NotFoundException(`Product with id ${id} does not exist`);
		}
	}

	@Query(() => [ProductEntity])
	async getAllProducts(): Promise<ProductEntity[]> {
		return this.productService.findAll();
	}

	@Query(() => ProductEntity)
	async getProductById(@Args('id') id: string): Promise<ProductEntity | undefined> {

		try {
			return await this.productService.findById(id);
		} catch (error) {
			throw new NotFoundException(`Product with id ${id} does not exist`);
		}

	}

}
