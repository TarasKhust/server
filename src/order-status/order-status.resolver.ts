import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderStatusService } from './order-status.service';
import { OrderStatus } from './entities/order-status.entity';
import { CreateOrderStatusInput } from './dto/create-order-status.input';
import { UpdateOrderStatusInput } from './dto/update-order-status.input';

@Resolver(() => OrderStatus)
export class OrderStatusResolver {
  constructor(private readonly orderStatusService: OrderStatusService) {}

  @Mutation(() => OrderStatus)
  async createOrderStatus(@Args('createOrderStatusInput') createOrderStatusInput: CreateOrderStatusInput): Promise<OrderStatus> {
	return this.orderStatusService.create(createOrderStatusInput);
  }

  @Query(() => [OrderStatus], { name: 'orderStatusFindAll' })
  async findAll(): Promise<OrderStatus[]> {
    return this.orderStatusService.findAll();
  }

  @Query(() => OrderStatus, { name: 'orderStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.orderStatusService.findOne(id);
  }

  @Mutation(() => OrderStatus)
  updateOrderStatus(@Args('updateOrderStatusInput') updateOrderStatusInput: UpdateOrderStatusInput) {
    return this.orderStatusService.update(updateOrderStatusInput.id, updateOrderStatusInput);
  }

  @Mutation(() => OrderStatus)
  removeOrderStatus(@Args('id', { type: () => Int }) id: number) {
    return this.orderStatusService.remove(id);
  }
}
