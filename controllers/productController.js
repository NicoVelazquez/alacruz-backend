const {validationResult} = require('express-validator/check');

const Product = require('../models/product');

exports.create = async (req, res, next) => {
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const featured = req.body.featured;
    const newProduct = new Product({name, imageUrl, featured});
    newProduct.save()
        .then(product => res.status(201).json(product))
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.edit = async (req, res, next) => {
    const id = req.body._id;
    const editProduct = await Product.findById(id);
    if (!editProduct) {
        throw new Error('No product found to edit.');
    }
    editProduct.name = req.body.name;
    editProduct.imageUrl = req.body.imageUrl;
    editProduct.featured = req.body.featured;
    editProduct.save()
        .then(product => res.status(200).json(product))
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.delete = async (req, res, next) => {
    const id = req.body._id;
    const product = await Product.findById(id);
    if (!product) {
        throw new Error('No product found to delete.');
    }
    product.remove()
        .then(() => res.status(200).json(id))
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.getAll = async (req, res, next) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
};

exports.getFeatured = async (req, res, next) => {
    Product.find({featured: true})
        .then(products => res.status(200).json(products))
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
};

exports.getRegular = async (req, res, next) => {
    Product.find({featured: false})
        .then(products => res.status(200).json(products))
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
};
