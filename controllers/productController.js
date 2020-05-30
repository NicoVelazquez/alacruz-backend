const path = require('path');
const fs = require('fs');

const {validationResult} = require('express-validator/check');

const Product = require('../models/product');

exports.getAll = async (req, res) => {
    Product.find()
        .then(products => {
            res.status(200).json(products)
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
};

exports.create = async (req, res) => {
    if (!req.file) {
        const error = new Error('No image provided.');
        error.statusCode = 422;
        throw error;
    }
    const name = req.body.name;
    const imageUrl = req.file.path;
    const newProduct = new Product({name, imageUrl});
    newProduct.save()
        .then(product => {
            res.status(201).json(product)
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.edit = async (req, res) => {
    const id = req.body.id;
    const editProduct = await Product.findById(id);
    if (!editProduct) {
        const error = new Error('No product founde to edit.');
        error.statusCode = 500;
        throw error;
    }
    if (req.file) {
        clearImage(editProduct.imageUrl);
        editProduct.imageUrl = req.file.path;
    }
    editProduct.name = req.body.name;
    editProduct.save()
        .then(product => {
            res.status(200).json(product)
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.delete = async (req, res) => {
    const id = req.body.id;
    const product = await Product.findById(id);
    if (!product) {
        const error = new Error('No product found to delete.');
        error.statusCode = 500;
        throw error;
    }
    product.remove()
        .then(() => {
            clearImage(product.imageUrl);
            res.status(200).json(id)
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

const clearImage = filePath => {
    filePath = path.join(__dirname, '..', filePath);
    fs.unlink(filePath, err => console.log('Delete file error:' + err));
};
