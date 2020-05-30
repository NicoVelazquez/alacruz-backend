const path = require('path');
const fs = require('fs');

const {validationResult} = require('express-validator/check');

const Banner = require('../models/banner');

exports.getAll = async (req, res) => {
    Banner.find()
        .then(banners => {
            res.status(200).json(banners)
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
    const newBanner = new Banner({name, imageUrl});
    newBanner.save()
        .then(banner => {
            res.status(201).json(banner)
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
    const editBanner = await Banner.findById(id);
    if (!editBanner) {
        const error = new Error('No banner founde to edit.');
        error.statusCode = 500;
        throw error;
    }
    if (req.file) {
        clearImage(editBanner.imageUrl);
        editBanner.imageUrl = req.file.path;
    }
    editBanner.name = req.body.name;
    editBanner.save()
        .then(banner => {
            res.status(200).json(banner)
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
    const banner = await Banner.findById(id);
    if (!banner) {
        const error = new Error('No banner found to delete.');
        error.statusCode = 500;
        throw error;
    }
    banner.remove()
        .then(() => {
            clearImage(banner.imageUrl);
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
