import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AttributeGroupService } from './attribute-group.service';
import { AttributeGroupEntity } from './entities/attribute-group.entity';
import { CreateAttributeGroupInput } from './dto/input/create-attribute-group.input';
import { UpdateAttributeGroupInput } from './dto/input/update-attribute-group.input';
import { DeleteResult, UpdateResult } from 'typeorm';
import { GetAttributeGroupArgs } from './dto/args/get-attribute-group.args';

@Resolver(() => AttributeGroupEntity)
export class AttributeGroupResolver {
  constructor(private readonly attributeService: AttributeGroupService) {}

  @Mutation(() => AttributeGroupEntity)
  async createAttribute(@Args('createAttributeInput') createAttributeInput: CreateAttributeGroupInput): Promise<AttributeGroupEntity> {
	return this.attributeService.create(createAttributeInput);
  }

  @Query(() => [AttributeGroupEntity], { name: 'attributeFindAll' })
  async findAll(): Promise<AttributeGroupEntity[]> {
	return this.attributeService.findAll();
  }

  @Query(() => AttributeGroupEntity, { name: 'attributeFindOne' })
  async findOne(@Args() getUserArg: GetAttributeGroupArgs): Promise<AttributeGroupEntity | undefined> {
	return this.attributeService.findOne(getUserArg);
  }

  @Mutation(() => AttributeGroupEntity)
  async updateAttribute(@Args('updateAttributeInput') updateAttributeInput: UpdateAttributeGroupInput): Promise<UpdateResult> {
	return this.attributeService.update(updateAttributeInput.id, updateAttributeInput);
  }

  @Mutation(() => AttributeGroupEntity)
  async removeAttribute(@Args('id', { type: () => Int }) id: number): Promise<DeleteResult> {
	return this.attributeService.remove(id);
  }
}
