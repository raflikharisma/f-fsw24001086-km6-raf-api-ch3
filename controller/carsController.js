const fs = require("fs");
const cars = JSON.parse(fs.readFileSync(`${__dirname}/../data/car.json`));

const defaultRouter = (req, res, next) => {
  res.status(200).json({
    status: "Success",
    message: "Ping Succesfully",
  });
};

const getAllCarsData = (req, res, next) => {
  res.status(200).json({
    status: "Success",
    totalData: cars.length,
    data: cars,
  });
};

const getDataCarsById = (req, res, next) => {
  const id = req.params.id;
  const findCars = cars.find((car) => car.id === id);
  console.log(findCars);
  res.status(200).send({
    status: "success",
    data: { findCars },
  });
};

const createCarsData = (req, res, next) => {
  const newCars = req.body;
  cars.push(newCars);

  fs.writeFile(`${__dirname}/../data/car.json`, JSON.stringify(cars), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        cars: newCars,
      },
    });
  });
};

const updateCarsData = (req, res, next) => {
  const id = req.params.id;
  const updatedData = req.body;
  const findIndex = cars.findIndex((car) => car.id === id);

  cars[findIndex] = { ...cars[findIndex], ...updatedData };

  fs.writeFile(`${__dirname}/../cars/car.json`, JSON.stringify(cars), (err) => {
    res.status(200).json({
      status: "success",
      message: "Car data updated successfully",
      data: cars[findIndex],
    });
  });
};

const deleteDataById = (req, res) => {
  const id = req.params.id;
  const findIndex = cars.findIndex((car) => car.id === id);

  cars.splice(findIndex, 1);
  fs.writeFile(`${__dirname}/../cars/car.json`, JSON.stringify(cars), (err) => {
    res.status(200).json({
      status: "success",
      message: "Car data deleted successfully",
    });
  });
};

module.exports = {
  defaultRouter,
  getAllCarsData,
  getDataCarsById,
  createCarsData,
  updateCarsData,
  deleteDataById,
};
