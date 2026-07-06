const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/customers.json");

function getAllCustomers() {
  const data = fs.readFileSync(filePath);

  return JSON.parse(data);
}

function getCustomerById(customerId) {
  const customers = getAllCustomers();

  return customers.find(
    (customer) => customer.customerId === customerId
  );
}

function createCustomer(customer) {
  const customers = getAllCustomers();

  customers.push(customer);

  fs.writeFileSync(filePath, JSON.stringify(customers, null, 2));

  return customer;
}

function updateCustomer(customerId, updatedCustomer) {
  const customers = getAllCustomers();

  const index = customers.findIndex(
    (customer) => customer.customerId === customerId
  );

  if (index === -1) {
    return null;
  }

  customers[index] = updatedCustomer;

  fs.writeFileSync(filePath, JSON.stringify(customers, null, 2));

  return updatedCustomer;
}

function updateCustomerStatus(customerId, status) {
  const customers = getAllCustomers();

  const customer = customers.find(
    (customer) => customer.customerId === customerId
  );

  if (!customer) {
    return null;
  }

  customer.status = status;
  customer.updatedDate = new Date().toISOString();

  fs.writeFileSync(filePath, JSON.stringify(customers, null, 2));

  return customer;
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  updateCustomerStatus,
};