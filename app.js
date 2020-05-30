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


// Body encoders
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(
    multer({storage: fileStorage, fileFilter: fileFilter}).single('image')
);

// Static serve files
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


// Routes
app.use('/auth', authRoutes);
app.use('/product', productRoutes);
app.use('/banner', bannerRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error handling
app.use((error, req, res) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data});
});


mongoose
    .connect(
        process.env.MONGO_URI
    )
    .then(() => {
        app.listen(process.env.PORT || 3000);
    })
    .catch(err => console.log(err));
