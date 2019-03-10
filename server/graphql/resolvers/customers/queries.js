import Customers from '../../../../imports/api/customers';

export function customer(root, { id }, context) {
  const customer = Customers.findOne({ _id: id });

  return customer;
}

export function customers() {
  const customers = Customers.find({}).fetch();

  return customers;
}
