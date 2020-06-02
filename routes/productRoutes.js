const express = require('express');
const {body} = require('express-validator/check');

const productController = require('../controllers/productController');
const isAuth = require('../middleware/is-auth');

const router = express.Router();


router.post('/create', isAuth, productController.create);

router.post('/edit', isAuth, productController.edit);

router.post('/delete', isAuth, productController.delete);

router.get('/all', productController.getAll);

router.get('/featured', productController.getFeatured);


module.exports = router;
