const {validationResult} = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

const User = require('../models/user');

const transporter = nodemailer.createTransport(sendGridTransport({
        auth: {
            api_key: process.env.API_KEY
        }
    })
);

exports.signIn = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    try {
        loadedUser = await User.findOne({email: email});
        if (!loadedUser) {
            const error = new Error('invalid credentials');
            error.statusCode = 400;
            throw error;
        }
        const isEqual = await bcrypt.compare(password, loadedUser.password);
        if (!isEqual) {
            const error = new Error('invalid credentials');
            error.statusCode = 400;
            throw error;
        }
        const token = jwt.sign(
            {
                email: loadedUser.email,
                userId: loadedUser._id.toString()
            },
            `${process.env.JWT_TOKEN}`,
            // {expiresIn: '1h'}
        );
        res.status(200).json({token: token, userId: loadedUser._id.toString(), email: email});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.signUp = async (req, res, next) => {
    const errors = validationResult(req);
    const email = req.body.email;
    const password = req.body.password;
    try {
        if (!errors.isEmpty()) {
            const error = new Error('Validation failed.');
            error.statusCode = 412;
            error.data = errors.array();
            throw error;
        }
        const hashedPw = await bcrypt.hash(password, 12);
        const user = new User({
            email: email,
            password: hashedPw
        });
        const result = await user.save();
        res.status(201).json({message: 'User created!', userId: result._id});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.sendMail = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    transporter.sendMail({
        to: 'nicovelabust@gmail.com',
        from: 'nicovelabust@hotmail.com',
        subject: 'A La Cruz',
        html: '<h1>Name: ' + name + '</h1>' +
            '<h2>Email: ' + email + '</h2>' +
            '<h3>Message: ' + message + '</h3>'
    })
        .then(() => res.status(200).json({message: 'Email sent successfully!'}))
        .catch(err => {
            next(err);
        });
};
