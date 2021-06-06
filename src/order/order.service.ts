import { Injectable } from '@nestjs/common';
import { UpdateOrderInput } from './dto/update-order.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderInput } from './dto/create-order.input';

@Injectable()
export class OrderService {

  constructor(@InjectRepository(Order)
              private orderRepository: Repository<Order>) {

  }

  public async create(createOrderInput: CreateOrderInput): Promise<Order> {
    const order = await this.orderRepository.create(createOrderInput);

	return this.orderRepository.save(order);
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find({
      relations: ['payment', 'product', 'customer'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
