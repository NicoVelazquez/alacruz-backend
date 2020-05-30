if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const bannerRoutes = require('./routes/bannerRoutes');

const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '@' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(
    multer({storage: fileStorage, fileFilter: fileFilter}).single('image')
);

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(express.static(path.join(__dirname, 'dist')));

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


// ROUTES
app.use('/auth', authRoutes);
app.use('/product', productRoutes);
app.use('/banner', bannerRoutes);


app.get('*', (req, res) => {
    res.send(path.join(__dirname, 'dist', 'index.html'));
});


app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data});
});


mongoose
    .connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@alacruz-m34mb.mongodb.net/${process.env.MONGO_DATABASE}`
    )
    .then(result => {
        app.listen(process.env.PORT || 3000);
    })
    .catch(err => console.log(err));
