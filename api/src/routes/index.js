const { Router } = require('express');
const router = Router();
const categories = require('./categories');
const products = require('./products');
const users = require('./users')
const favorites = require('./favorites')

router.use('/categories', categories);
router.use('/products', products);
router.use('/users', users);
router.use('/favorites', favorites)

module.exports = router;