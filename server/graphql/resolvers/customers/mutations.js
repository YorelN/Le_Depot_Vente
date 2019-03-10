import Customers from '../../../../imports/api/customers';

export function addCustomer(root, { customer }, context) {
  const addedCustomerId = Customers.insert(customer);
  const addedCustomer = Customers.find({ _id: addedCustomerId }).fetch();

  return addedCustomer[0];
}
