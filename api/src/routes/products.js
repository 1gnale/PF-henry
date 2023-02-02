const { Router } = require('express');
const { getAllProduct } = require('../controllers/getAllProducts');
const { getByName } = require('../controllers/getByName');
const { getById } = require('../controllers/getById')
const {validatePostProduct} = require ("../middlewares/validatePostProduct")
const {postProduct} = require("../controllers/postProduct")
const productsRouter = Router();


productsRouter.get('/', getAllProduct)
productsRouter.get('/:id', getById)
productsRouter.post('/', validatePostProduct, postProduct)

module.exports = productsRouter;