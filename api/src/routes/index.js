const { Router } = require('express');
const router = Router();
const categories = require('./categories');
const products = require('./products');
const users = require('./users')
const favorites = require('./favorites')
const reviews = require('./reviews')
const orders = require('./orders')

router.use('/categories', categories);
router.use('/products', products);
router.use('/users', users);
router.use('/favorites', favorites)
router.use('/reviews', reviews)
router.use('/orders', orders)

module.exports = router;