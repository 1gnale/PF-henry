const { Router } = require('express');
const { getAllProducts } = require('../controllers/getAllProducts');
const { getByName } = require('../controllers/getByName');
const { getById } = require('../controllers/getById')
const router = Router();


router.get('/', getByName, getAllProducts)
router.get('/:id', getById)
router.post('/', )

module.exports = router;