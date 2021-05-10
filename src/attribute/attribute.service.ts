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

	return this.attributeRepository.save(createGroupInput);
  }

 async findAll(): Promise<AttributeEntity[]> {
	return this.attributeRepository.find({
        relations: ['product', 'attribute'],
    });
  }

  findOne(id: number) {
	return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupInput: UpdateAttributeInput) {
	return `This action updates a #${id} group`;
  }

  remove(id: number) {
	return `This action removes a #${id} group`;
  }
}
