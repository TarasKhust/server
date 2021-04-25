import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BrandService } from './brand.service';
import { BrandEntity } from './entities/brand.entity';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { NotFoundException } from '@nestjs/common';
import { UpdateResult } from 'typeorm';

@Resolver(() => BrandEntity)
export class BrandResolver {
  constructor(private readonly brandService: BrandService) {}

  @Mutation(() => BrandEntity)
  async createBrand(@Args('data') createBrandInput: CreateBrandInput): Promise<CreateBrandInput> {
	return this.brandService.create(createBrandInput);
  }

  @Query(() => [BrandEntity], { name: 'getAllBrands' })
  async findAll(): Promise<BrandEntity[]> {
	return this.brandService.findAll();
  }

  @Query(() => BrandEntity, { name: 'getBrandById' })
  async findOne(@Args('id', { type: () => String }) id: string): Promise<BrandEntity | undefined> {
	try {
		return await this.brandService.findOne(id);
	} catch (error) {
		throw new NotFoundException(`Brand with id ${id} does not exist`);
	}
  }

  @Mutation(() => BrandEntity)
  async updateBrand(@Args('updateBrandInput') updateBrandInput: UpdateBrandInput): Promise<UpdateResult> {
	return this.brandService.update(updateBrandInput.id, updateBrandInput);
  }

  @Mutation(() => BrandEntity)
  async removeBrand(@Args('id', { type: () => String }) id: string): Promise<BrandEntity | undefined> {

	try {
		return await this.brandService.findOne(id);
	} catch (error) {
		throw new NotFoundException(`Brand with id ${id} does not exist`);
	}
  }
}
