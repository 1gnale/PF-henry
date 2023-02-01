const { Router } = require('express');
const { getAllProduct } = require('../controllers/getAllProducts');
const { getByName } = require('../controllers/getByName');
const { getById } = require('../controllers/getById')
const productsRouter = Router();


productsRouter.get('/', getAllProduct)
// productsRouter.get('/:id', getById)
// productsRouter.post('/', )

module.exports = productsRouter;