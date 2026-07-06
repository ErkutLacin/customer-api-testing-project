const customerService = require("../services/customerService");
const {
  createError,
  validateCreateCustomer,
  validateUpdateCustomer,
  validateStatusUpdate,
} = require("../validators/customerValidator");

function getAllCustomers(req, res) {
  const customers = customerService.getAllCustomers();

  res.status(200).json(customers);
}

function createCustomer(req, res) {
  const customers = customerService.getAllCustomers();

  const validationError = validateCreateCustomer(
    req.body,
    customers,
    req.originalUrl
  );

  if (validationError) {
    return res.status(validationError.status).json(validationError);
  }

  const now = new Date().toISOString();

  const customer = {
    customerId: Date.now().toString(),
    identityNumber: req.body.identityNumber,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDate: req.body.birthDate,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email || null,
    address: req.body.address || null,
    status: "ACTIVE",
    createdDate: now,
    updatedDate: now,
  };

  customerService.createCustomer(customer);

  res.status(201).json(customer);
}

function getCustomerById(req, res) {
  const customer = customerService.getCustomerById(req.params.customerId);

  if (!customer) {
    return res.status(404).json(
      createError(404, "Not Found", "Customer not found.", req.originalUrl)
    );
  }

  res.status(200).json(customer);
}

function updateCustomer(req, res) {
  const existingCustomer = customerService.getCustomerById(
    req.params.customerId
  );

  if (!existingCustomer) {
    return res.status(404).json(
      createError(404, "Not Found", "Customer not found.", req.originalUrl)
    );
  }

  const customers = customerService.getAllCustomers();

  const validationError = validateUpdateCustomer(
    req.body,
    customers,
    existingCustomer,
    req.originalUrl
  );

  if (validationError) {
    return res.status(validationError.status).json(validationError);
  }

  const updatedCustomer = {
    ...existingCustomer,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email || null,
    address: req.body.address || null,
    customerId: existingCustomer.customerId,
    identityNumber: existingCustomer.identityNumber,
    birthDate: existingCustomer.birthDate,
    status: existingCustomer.status,
    createdDate: existingCustomer.createdDate,
    updatedDate: new Date().toISOString(),
  };

  const customer = customerService.updateCustomer(
    req.params.customerId,
    updatedCustomer
  );

  res.status(200).json(customer);
}

function updateCustomerStatus(req, res) {
  const validationError = validateStatusUpdate(
    req.body,
    req.originalUrl
  );

  if (validationError) {
    return res.status(validationError.status).json(validationError);
  }

  const customer = customerService.updateCustomerStatus(
    req.params.customerId,
    req.body.status
  );

  if (!customer) {
    return res.status(404).json(
      createError(404, "Not Found", "Customer not found.", req.originalUrl)
    );
  }

  res.status(200).json(customer);
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  updateCustomerStatus,
};