const express = require('express');
const {body} = require('express-validator/check');

const productController = require('../controllers/productController');
const isAuth = require('../middleware/is-auth');


const router = express.Router();

router.get('/all', productController.getAll);

router.post('/create', isAuth, productController.create);

router.post('/edit', isAuth, productController.edit);

router.post('/delete', isAuth, productController.delete);

module.exports = router;