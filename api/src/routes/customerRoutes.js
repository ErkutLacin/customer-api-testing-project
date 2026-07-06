const express = require("express");
const customerController = require("../controllers/customerController");

const router = express.Router();

router.get("/customers", customerController.getAllCustomers);

router.get("/customers/:customerId", customerController.getCustomerById);

router.post("/customers", customerController.createCustomer);

router.put("/customers/:customerId", customerController.updateCustomer);

router.patch(
  "/customers/:customerId/status",
  customerController.updateCustomerStatus
);

module.exports = router;