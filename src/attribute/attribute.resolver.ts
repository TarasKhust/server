import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AttributeService } from './attribute.service';
import { AttributeEntity } from './entities/attribute.entity';
import { CreateAttributeInput } from './dto/create-attribute.input';
import { UpdateAttributeInput } from './dto/update-attribute.input';

@Resolver(() => AttributeEntity)
export class AttributeResolver {
  constructor(private readonly groupService: AttributeService) {}

  @Mutation(() => AttributeEntity, { name: 'createAttribute' })
  async createAttribute(@Args('createAttribute') createAttribute: CreateAttributeInput): Promise<CreateAttributeInput> {
    return this.groupService.create(createAttribute);
  }

  @Query(() => [AttributeEntity], { name: 'attributeFindAll' })
  async findAll(): Promise<AttributeEntity[]> {
	return this.groupService.findAll();
  }

  @Query(() => AttributeEntity, { name: 'group' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.groupService.findOne(id);
  }

  @Mutation(() => AttributeEntity)
  updateGroup(@Args('updateGroupInput') updateGroupInput: UpdateAttributeInput) {
    return this.groupService.update(updateGroupInput.id, updateGroupInput);
  }

  @Mutation(() => AttributeEntity)
  removeGroup(@Args('id', { type: () => Int }) id: number) {
    return this.groupService.remove(id);
  }
}
