import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BrandEntity } from './entities/brand.entity';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';

@Injectable()
export class BrandService {
	constructor(
		@InjectRepository(BrandEntity)
		private brandRepository: Repository<BrandEntity>
	) {
	}

	async create(createBrand: CreateBrandInput): Promise<BrandEntity> {
		const { name } = createBrand;

		const getProductVendor = await this.brandRepository.findOne({
			where: {
				name,
			},
		});

		if (getProductVendor) {
			throw new NotFoundException(`This ${name} already exist`);
		}

		const newProduct = await this.brandRepository.create(createBrand);

		return this.brandRepository.save(newProduct);
	}

	async findAll(): Promise<BrandEntity[]> {
		return this.brandRepository.find();
	}

	async findOne(id: string): Promise<BrandEntity | undefined> {
		return this.brandRepository.findOne({
			where: {
				id,
			},
		});
	}

  async update(id: string, updateBrandInput: UpdateBrandInput): Promise<UpdateResult> {
	return this.brandRepository.update(id, {
		...updateBrandInput,

	});
  }

	async remove(id: string): Promise<DeleteResult> {
		return this.brandRepository.delete(id);
	}
}
