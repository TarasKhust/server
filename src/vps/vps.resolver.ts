import {Resolver, Query, Mutation, Args, Int, Directive, createUnionType} from '@nestjs/graphql';
import { VpsService } from './vps.service';
import { Vp } from './entities/vp.entity';
import { CreateVpInput } from './dto/create-vp.input';
import { UpdateVpInput } from './dto/update-vp.input';
import {VpsManageListEntity} from "./entities/vps-manage-list.entity";

export const ResultUnion = createUnionType({
  name: 'Result',
  types: () => [Vp, VpsManageListEntity],
  resolveType(value) {
    if (value.name) {
      return Vp;
    }
    if (value.title) {
      return VpsManageListEntity;
    }
    return null;
  },
});

@Resolver(() => Vp)
export class VpsResolver {
  constructor(private readonly vpsService: VpsService) {}

  @Mutation(() => Vp)
  createVp(@Args('createVpInput') createVpInput: CreateVpInput) {
    return this.vpsService.create(createVpInput);
  }

  @Directive('@deprecated(reason: "This query will be removed in the next version")')
  @Query(() => [Vp], { name: 'vps' })
  findAll() {
    return this.vpsService.findAll();
  }

  @Query(returns => [ResultUnion])
  search(): Array<typeof ResultUnion> {
    return [new Vp(), new VpsManageListEntity()];
  }

  @Query(() => Vp, { name: 'vp' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.vpsService.findOne(id);
  }

  @Mutation(() => Vp)
  updateVp(@Args('updateVpInput') updateVpInput: UpdateVpInput) {
    return this.vpsService.update(updateVpInput.id, updateVpInput);
  }

  @Mutation(() => Vp)
  removeVp(@Args('id', { type: () => Int }) id: number) {
    return this.vpsService.remove(id);
  }
}
