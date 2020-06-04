const express = require('express');
const {body} = require('express-validator/check');

const authController = require('../controllers/authController');
const User = require('../models/user');

const router = express.Router();

/**
 * @swagger
 *
 * /auth/sign-in:
 *   post:
 *     tags:
 *       - Auth
 *     description: Sign In to the application
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Receive JWToken and UserId
 */
router.post('/sign-in', authController.signIn);

/**
 * @swagger
 *
 * /auth/sign-up:
 *   post:
 *     tags:
 *       - Auth
 *     description: Sign Up to the application
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       201:
 *         description: User created and response = userId
 */
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

/**
 * @swagger
 *
 * /auth/send-mail:
 *   post:
 *     tags:
 *       - Auth
 *     description: Send mail by the user
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             message:
 *               type: string
 *     responses:
 *       200:
 *         description: Email sent successfully
 */
router.post('/send-mail', authController.sendMail);

module.exports = router;
