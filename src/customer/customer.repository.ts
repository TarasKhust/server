import { Repository, EntityRepository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {

	public async createCustomer(
		createCustomerInput: CreateCustomerInput,
	): Promise<Customer> {
		const { firstName, email, phone, lastName, surName } = createCustomerInput;

		const customer = new Customer();
		customer.firstName = firstName;
		customer.lastName = lastName;
		customer.surName = surName;
		customer.email = email;
		customer.phone = phone;

		// await customer.save();
		return customer;
	}

	public async editProduct(
		createCustomerInput: CreateCustomerInput,
		editedCustomer: Customer,
	): Promise<Customer> {
		const { firstName, lastName, surName, email, phone } = createCustomerInput;

		editedCustomer.firstName = firstName;
		editedCustomer.lastName = lastName;
		editedCustomer.surName = surName;
		editedCustomer.email = email;
		editedCustomer.phone = phone;

		// await editedCustomer.save();

		return editedCustomer;
	}
}
