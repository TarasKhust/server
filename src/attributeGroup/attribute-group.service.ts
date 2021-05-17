import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateAttributeGroupInput } from './dto/input/update-attribute-group.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { AttributeGroupEntity } from './entities/attribute-group.entity';
import { CreateAttributeGroupInput } from './dto/input/create-attribute-group.input';
import { GetAttributeGroupArgs } from './dto/args/get-attribute-group.args';

@Injectable()
export class AttributeGroupService {
  constructor(
		@InjectRepository(AttributeGroupEntity)
		private attributeGroupRepository: Repository<AttributeGroupEntity>
  ) {
  }

  async create(createAttribute: CreateAttributeGroupInput): Promise<AttributeGroupEntity> {

	  const { name } = createAttribute;

	  const getAttributeName = await this.attributeGroupRepository.findOne({
	  	where: {
	  	name,
	  	},
	  });

	  if (getAttributeName) {
	  	throw new NotFoundException(`This ${name} already exist`);
	  }

	  const newAttributeGroup = await this.attributeGroupRepository.create(createAttribute);

	return this.attributeGroupRepository.save(newAttributeGroup);
  }

  async findAll(): Promise<AttributeGroupEntity[]> {

  	 return this.attributeGroupRepository.find({
		 relations: ['product', 'attribute'],
	 });

  }

  async findOne(value: GetAttributeGroupArgs): Promise<AttributeGroupEntity | undefined> {
	return this.attributeGroupRepository.findOne({
		where: {
			id: value.id,
		},
		relations: ['product', 'attribute'],
	});
  }

	async update(id: number, updateAttributeInput: UpdateAttributeGroupInput): Promise<UpdateResult> {
		return this.attributeGroupRepository.update(id, {
			...updateAttributeInput,

		});
	}

  async remove(id: number): Promise<DeleteResult> {
	  return this.attributeGroupRepository.delete(id);
  }
}
