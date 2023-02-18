const { Router } = require('express');
const { getAllProduct } = require('../controllers/Products/getAllProducts');
const { getByName } = require('../controllers/Products/getByName');
const { getProductById } = require('../controllers/Products/getProductById');
const { validatePostProduct } = require ("../middlewares/validatePostProduct");
const { postProduct } = require("../controllers/Products/postProduct");
const { updateProduct } = require("../controllers/Products/putProducts")
const { verifyToken } = require('../middlewares/verifyToken')
const productsRouter = Router();


productsRouter.get('/', getByName, getAllProduct)
productsRouter.get('/:id', getProductById)
productsRouter.post('/',verifyToken, validatePostProduct, postProduct)
productsRouter.put('/', updateProduct)

module.exports = productsRouter;
