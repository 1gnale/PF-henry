const { Router } = require('express');
const { postCategory } = require('../controllers/postCategory');
const { validatePostCategory } = require('../middlewares/validatePostCategory');
const router = Router();

router.post("/",validatePostCategory, postCategory)

module.exports = router;