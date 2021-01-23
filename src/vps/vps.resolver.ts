import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VpsService } from './vps.service';
import { Vp } from './entities/vp.entity';
import { CreateVpInput } from './dto/create-vp.input';
import { UpdateVpInput } from './dto/update-vp.input';

@Resolver(() => Vp)
export class VpsResolver {
  constructor(private readonly vpsService: VpsService) {}

  @Mutation(() => Vp)
  createVp(@Args('createVpInput') createVpInput: CreateVpInput) {
    return this.vpsService.create(createVpInput);
  }

  @Query(() => [Vp], { name: 'vps' })
  findAll() {
    return this.vpsService.findAll();
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
