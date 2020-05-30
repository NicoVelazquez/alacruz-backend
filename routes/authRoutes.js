const express = require('express');
const {body} = require('express-validator/check');

const authController = require('../controllers/authController');
const User = require('../models/user');


const router = express.Router();

router.post('/sign-in', authController.signIn);

router.post('/sign-up', [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email.')
            .custom((value) => {
                return User.findOne({email: value})
                    .then(userDoc => {
                        if (userDoc) {
                            return Promise.reject('E-Mail address already exists!');
                        }
                    });
            })
            .normalizeEmail(),
        body('password')
            .trim()
            .isLength({min: 8}),
    ],
    authController.signUp);

module.exports = router;
