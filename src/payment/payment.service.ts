import { Injectable } from '@nestjs/common';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import { Payment } from './entities/payment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(@InjectRepository(Payment)
  private paymentRepository: Repository<Payment>) {
  }

  create(createPaymentInput: CreatePaymentInput) {
    return 'This action adds a new payment';
  }

  async findAll(): Promise<Payment[]> {
    return this.paymentRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentInput: UpdatePaymentInput) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
