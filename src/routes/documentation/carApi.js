exports.getCarsSchema = {
  description: 'get cars',
  tags: ['cars'],
  summary: 'fetches all cars'
}
exports.getCarByIdSchema = {
  description: 'get a car by id',
  tags: ['cars'],
  summary: 'fetches a car specified by id',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'user id'
      }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        title: { type: 'string' },
        brand: { type: 'string' },
        price: { type: 'string' },
        age: { type: 'number' }
      }
    }
  }
}
exports.addCarSchema = {
  description: 'Create a new car',
  tags: ['cars'],
  summary: 'Creates new car with given values',
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      brand: { type: 'string' },
      price: { type: 'string' },
      age: { type: 'number' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        title: { type: 'string' },
        brand: { type: 'string' },
        price: { type: 'string' },
        age: { type: 'number' }
      }
    }
  }
}
exports.putCarByIdSchema = {
  description: 'modifies a car by id',
  tags: ['cars'],
  summary: 'updates a car specified by id',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'user id'
      }
    }
  },
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      brand: { type: 'string' },
      price: { type: 'string' },
      age: { type: 'number' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        title: { type: 'string' },
        brand: { type: 'string' },
        price: { type: 'string' },
        age: { type: 'number' }
      }
    }
  }
}
exports.deleteCarSchema = {
  description: 'delete a car by id',
  tags: ['cars'],
  summary: 'delete a car specified by id',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'user id'
      }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        title: { type: 'string' },
        brand: { type: 'string' },
        price: { type: 'string' },
        age: { type: 'number' }
      }
    }
  }
}
