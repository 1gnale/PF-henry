const { Router } = require('express');
const { getAllProduct } = require('../controllers/Products/getAllProducts');
const { getByName } = require('../controllers/Products/getByName');
const { getById } = require('../controllers/Products/getById')
const {validatePostProduct} = require ("../middlewares/validatePostProduct")
const {postProduct} = require("../controllers/Products/postProduct")
const productsRouter = Router();


productsRouter.get('/',getByName, getAllProduct)
productsRouter.get('/:id', getById)
productsRouter.post('/', validatePostProduct, postProduct)

module.exports = productsRouter;