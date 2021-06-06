import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';
import { CustomerRepository } from './customer.repository';

describe('ProductService', () => {
	let customService: CustomerService;
	let customRepository: CustomerRepository;

	const mockProductRepository = () => ({
		create: jest.fn(),
		find: jest.fn(),
		findOne: jest.fn(),
		delete: jest.fn(),
	});

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				CustomerService,
				{
					provide: CustomerRepository,
					useFactory: mockProductRepository,
				},
			],
		}).compile();

		customService = await module.get<CustomerService>(CustomerService);
		customRepository = await module.get<CustomerRepository>(CustomerRepository);
	});

	describe('createProduct', () => {
		it('should save a product in the database', async () => {
			/*
			 * customRepository.createCustomer.mockResolvedValue('someProduct');
			 * expect(customRepository.createCustomer).not.toHaveBeenCalled();
			 */

			const createProductDto = {
			    id: 1,
				name: 'sample name',
				phone: 'sample description',
				email: 'sample price',
			};

			const result = await customService.create(createProductDto);

			expect(customRepository.createCustomer).toHaveBeenCalledWith(
				createProductDto,
			);

			expect(result).toEqual(createProductDto);
		});
	});

});
