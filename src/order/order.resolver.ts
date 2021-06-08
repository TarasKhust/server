import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { DeleteResult } from 'typeorm';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Order)
  async createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput): Promise<Order> {
    return this.orderService.create(createOrderInput);
  }

  @Query(() => [Order], { name: 'orderFindAll' })
  async findAll(): Promise<Order[]> {
	return this.orderService.findAll();
  }

  @Query(() => Order, { name: 'orderDetails' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<Order | undefined> {
	return this.orderService.findOne(id);
  }

  @Mutation(() => Order)
  updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.orderService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation(() => Order)
  async removeOrder(@Args('id', { type: () => Int }) id: number): Promise<DeleteResult> {
    return this.orderService.remove(id);
  }
}
