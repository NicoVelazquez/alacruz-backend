const express = require('express');
const {body} = require('express-validator/check');

const bannerController = require('../controllers/bannerController');
const isAuth = require('../middleware/is-auth');


const router = express.Router();

router.get('/all', bannerController.getAll);

router.post('/create', isAuth, bannerController.create);

router.post('/edit', isAuth, bannerController.edit);

router.post('/delete', isAuth, bannerController.delete);

module.exports = router;
