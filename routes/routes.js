const express = require("express");
const router = express.Router();
const carsController = require("../controller/carsController");

// Define the default route
router.get("/", carsController.defaultRouter);

router.route("/api/v1/cars").get(carsController.getAllCarsData).post(carsController.createCarsData);
router.route("/api/v1/cars/:id").get(carsController.getDataCarsById).patch(carsController.updateCarsData).delete(carsController.deleteDataById);

module.exports = router;
