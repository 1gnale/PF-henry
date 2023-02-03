const { Router } = require('express');
const { getAllCategories } = require('../controllers/getAllCategories')
const { postCategory } = require('../controllers/postCategory');
const { validatePostCategory } = require('../middlewares/validatePostCategory');
const router = Router();

router.get('/', getAllCategories)
router.post("/",validatePostCategory, postCategory)

module.exports = router;