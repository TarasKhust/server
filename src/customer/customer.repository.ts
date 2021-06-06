import { Repository, EntityRepository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {

	public async createCustomer(
		createCustomerInput: CreateCustomerInput,
	): Promise<Customer> {
		const { name, email, phone } = createCustomerInput;

		const customer = new Customer();
		customer.name = name;
		customer.email = email;
		customer.phone = phone;

		// await customer.save();
		return customer;
	}

	public async editProduct(
		createCustomerInput: CreateCustomerInput,
		editedCustomer: Customer,
	): Promise<Customer> {
		const { name, email, phone } = createCustomerInput;

		editedCustomer.name = name;
		editedCustomer.email = email;
		editedCustomer.phone = phone;

		// await editedCustomer.save();

		return editedCustomer;
	}
}
