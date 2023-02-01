const { Router } = require('express');
const router = Router();
const categories = require('./categories');
const products = require('./products');

router.use('/categories', categories);
router.use('/products', products);

module.exports = router;