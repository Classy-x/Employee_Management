const express = require("express");
const employee = require("../controllers/employee.controller");

module.exports = (app) => {
  const router = express.Router();

  router.get("/employee", employee.getEmployees);

  router.post("/employee", employee.createEmployee);

  app.use("/api", router);
};
