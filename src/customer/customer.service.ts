import { Injectable } from '@nestjs/common';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerRepository } from './customer.repository';
import { CreateCustomerInput } from './dto/create-customer.input';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
		@InjectRepository(CustomerRepository)
		private customerRepository: CustomerRepository,
  ) {}

  public async create(
		createCustomerInput: CreateCustomerInput,
  ): Promise<Customer> {
	return this.customerRepository.createCustomer(createCustomerInput);
  }

  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerInput: UpdateCustomerInput) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
