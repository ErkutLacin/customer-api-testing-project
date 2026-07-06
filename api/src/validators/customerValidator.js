function createError(status, error, message, path) {
  return {
    timestamp: new Date().toISOString(),
    status,
    error,
    message,
    path,
  };
}

function isEmpty(value) {
  return value === undefined || value === null || value === "";
}

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}

function validateUnknownFields(body, allowedFields, path) {
  const invalidField = Object.keys(body).find(
    (field) => !allowedFields.includes(field)
  );

  if (invalidField) {
    return createError(400, "Bad Request", `Unknown field: ${invalidField}`, path);
  }

  return null;
}

function validateCreateCustomer(body, customers, path) {
  const allowedFields = [
    "identityNumber",
    "firstName",
    "lastName",
    "birthDate",
    "phoneNumber",
    "email",
    "address",
  ];

  const unknownFieldError = validateUnknownFields(body, allowedFields, path);

  if (unknownFieldError) {
    return unknownFieldError;
  }

  const {
    identityNumber,
    firstName,
    lastName,
    birthDate,
    phoneNumber,
    email,
  } = body;

  if (isEmpty(identityNumber)) {
    return createError(400, "Bad Request", "Identity Number is required.", path);
  }

  if (!/^\d{11}$/.test(identityNumber)) {
    return createError(400, "Bad Request", "Identity Number must be exactly 11 digits.", path);
  }

  if (customers.some((customer) => customer.identityNumber === identityNumber)) {
    return createError(409, "Conflict", "Identity Number already exists.", path);
  }

  if (isEmpty(firstName)) {
    return createError(400, "Bad Request", "First Name is required.", path);
  }

  if (isEmpty(lastName)) {
    return createError(400, "Bad Request", "Last Name is required.", path);
  }

  if (isEmpty(birthDate)) {
    return createError(400, "Bad Request", "Birth Date is required.", path);
  }

  if (Number.isNaN(new Date(birthDate).getTime())) {
    return createError(400, "Bad Request", "Birth Date must be a valid date.", path);
  }

  if (calculateAge(birthDate) < 18) {
    return createError(400, "Bad Request", "Customer must be at least 18 years old.", path);
  }

  if (isEmpty(phoneNumber)) {
    return createError(400, "Bad Request", "Phone Number is required.", path);
  }

  if (!/^\d{10}$/.test(phoneNumber)) {
    return createError(400, "Bad Request", "Phone Number must be exactly 10 digits.", path);
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return createError(400, "Bad Request", "Email format is invalid.", path);
  }

  if (
    email &&
    customers.some((customer) => customer.email === email)
  ) {
    return createError(409, "Conflict", "Email already exists.", path);
  }

  return null;
}

function validateUpdateCustomer(body, customers, currentCustomer, path) {
  const allowedFields = [
    "firstName",
    "lastName",
    "phoneNumber",
    "email",
    "address",
  ];

  const unknownFieldError = validateUnknownFields(body, allowedFields, path);

  if (unknownFieldError) {
    return unknownFieldError;
  }

  const { firstName, lastName, phoneNumber, email } = body;

  if (isEmpty(firstName)) {
    return createError(400, "Bad Request", "First Name is required.", path);
  }

  if (isEmpty(lastName)) {
    return createError(400, "Bad Request", "Last Name is required.", path);
  }

  if (isEmpty(phoneNumber)) {
    return createError(400, "Bad Request", "Phone Number is required.", path);
  }

  if (!/^\d{10}$/.test(phoneNumber)) {
    return createError(400, "Bad Request", "Phone Number must be exactly 10 digits.", path);
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return createError(400, "Bad Request", "Email format is invalid.", path);
  }

  if (
    email &&
    customers.some(
      (customer) =>
        customer.email === email &&
        customer.customerId !== currentCustomer.customerId
    )
  ) {
    return createError(409, "Conflict", "Email already exists.", path);
  }

  return null;
}

function validateStatusUpdate(body, path) {
  const allowedFields = ["status"];

  const unknownFieldError = validateUnknownFields(body, allowedFields, path);

  if (unknownFieldError) {
    return unknownFieldError;
  }

  const { status } = body;

  if (isEmpty(status)) {
    return createError(400, "Bad Request", "Status is required.", path);
  }

  if (!["ACTIVE", "PASSIVE"].includes(status)) {
    return createError(400, "Bad Request", "Status must be ACTIVE or PASSIVE.", path);
  }

  return null;
}

module.exports = {
  createError,
  validateCreateCustomer,
  validateUpdateCustomer,
  validateStatusUpdate,
};