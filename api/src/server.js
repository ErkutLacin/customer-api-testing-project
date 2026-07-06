const express = require("express");
const customerRoutes = require("./routes/customerRoutes");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/api/v1", customerRoutes);

app.get("/", (req, res) => {
  res.send("Customer API is running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});