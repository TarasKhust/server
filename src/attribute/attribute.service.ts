import { Injectable } from '@nestjs/common';
import { CreateAttributeInput } from './dto/create-attribute.input';
import { UpdateAttributeInput } from './dto/update-attribute.input';
import { AttributeEntity } from './entities/attribute.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AttributeService {
  constructor(
		@InjectRepository(AttributeEntity)
		private attributeRepository: Repository<AttributeEntity>
  ) {
  }

  async create(createGroupInput: CreateAttributeInput): Promise<AttributeEntity> {

	  const newAttribute = await this.attributeRepository.create(createGroupInput);

	return this.attributeRepository.save(newAttribute);
  }

 async findAll(): Promise<AttributeEntity[]> {
	return this.attributeRepository.find({
		relations: ['product', 'attribute_group'],
	});
  }

  findOne(id: number): Promise<AttributeEntity> {
	return this.attributeRepository.findOneOrFail({
		where: {
			id,
		},
		relations: ['product', 'attribute_group'],

	});
  }

  update(id: number, updateGroupInput: UpdateAttributeInput) {
	return `This action updates a #${id} group`;
  }

  remove(id: number) {
	return `This action removes a #${id} group`;
  }
}
