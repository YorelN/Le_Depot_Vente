import Customers from '../../../../imports/api/customers';

export function addCustomer(root, { customer }, context) {
  const addedCustomer = Customers.insert(customer);

  console.log(addedCustomer);
  return addedCustomer;
}