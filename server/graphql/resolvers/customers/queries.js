import Customers from '../../../../imports/api/customers';

export function customer({ args: { _id: customerId } }) {
  const customer = Customers.findOne(id => id === customerId);

  return customer;
}

export function customers() {
  const customers = Customers.find({}).fetch();

  return customers;
}
