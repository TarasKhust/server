import { Injectable } from '@nestjs/common';
import { CreateOrderStatusInput } from './dto/create-order-status.input';
import { UpdateOrderStatusInput } from './dto/update-order-status.input';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderStatus } from './entities/order-status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderStatusService {
  constructor(@InjectRepository(OrderStatus) private orderStatusRepository: Repository<OrderStatus>) {
  }

  async create(createOrderStatusInput: CreateOrderStatusInput): Promise<OrderStatus> {

	return this.orderStatusRepository.create(createOrderStatusInput);

  }

  async findAll(): Promise<OrderStatus[]> {
    return this.orderStatusRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} orderStatus`;
  }

  update(id: number, updateOrderStatusInput: UpdateOrderStatusInput) {
    return `This action updates a #${id} orderStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderStatus`;
  }
}
