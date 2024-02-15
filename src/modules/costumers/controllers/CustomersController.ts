import { Request, Response } from 'express';
import ListCustomersService from '../services/ListCustomerService';
import ShowCustomerService from '../services/ShowCustomerService';
import CreateCustomerService from '../services/CreateCustomerService';
import UpdateCustomerService from '../services/UpdateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';

export default class CustomerProductController {
  // Method to list customers
  public async index(request: Request, response: Response): Promise<Response> {
    const listCustomers = new ListCustomersService();

    const customers = await listCustomers.execute();

    return response.json(customers);
  }

  // Method to show a customer through the id
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const ShowCustomer = new ShowCustomerService();

    const customer = await ShowCustomer.execute({ id });

    return response.json(customer);
  }

  // Method to create a customer
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCustomer = new CreateCustomerService();

    const customer = await createCustomer.execute({
      name,
      email,
    });

    return response.json(customer);
  }

  // Method to update a customer
  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const { id } = request.params;

    const updateCustomer = new UpdateCustomerService();

    const customer = await updateCustomer.execute({
      id,
      name,
      email,
    });

    return response.json(customer);
  }

  // Method to delete a customer using their id
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteCustomer = new DeleteCustomerService();

    await deleteCustomer.execute({ id });

    return response.json([]);
  }
}
