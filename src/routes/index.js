// Import our Controllers
const carController = require('../controllers/carController')

// Import Swagger documentation
const documentation = require('./documentation/carApi')

const routes = [
  {
    method: 'GET',
    url: '/api/cars',
    handler: carController.getCars,
    schema: documentation.getCarsSchema
  },
  {
    method: 'GET',
    url: '/api/cars/:id',
    handler: carController.getSingleCar,
    schema: documentation.getCarByIdSchema
  },
  {
    method: 'POST',
    url: '/api/cars',
    handler: carController.addCar,
    schema: documentation.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/cars/:id',
    handler: carController.updateCar,
    schema: documentation.putCarByIdSchema
  },
  {
    method: 'DELETE',
    url: '/api/cars/:id',
    handler: carController.deleteCar,
    schema: documentation.deleteCarSchema
  }
]

module.exports = routes
