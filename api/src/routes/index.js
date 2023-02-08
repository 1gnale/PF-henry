const { Router } = require('express');
const router = Router();
const categories = require('./categories');
const products = require('./products');
const users = require('./users')

router.use('/categories', categories);
router.use('/products', products);
router.use('/users', users)

module.exports = router;