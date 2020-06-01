const {validationResult} = require('express-validator/check');

const Banner = require('../models/banner');

exports.getAll = async (req, res) => {
    Banner.find()
        .then(banners => res.status(200).json(banners))
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
};

exports.create = async (req, res) => {
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const newBanner = new Banner({name, imageUrl});
    newBanner.save()
        .then(banner => res.status(201).json(banner))
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.edit = async (req, res) => {
    const id = req.body._id;
    const editBanner = await Banner.findById(id);
    if (!editBanner) {
        throw new Error('No banner found to edit.');
    }
    editBanner.name = req.body.name;
    editBanner.imageUrl = req.body.imageUrl;
    editBanner.save()
        .then(banner => res.status(200).json(banner))
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.delete = async (req, res) => {
    const id = req.body._id;
    const banner = await Banner.findById(id);
    if (!banner) {
        throw new Error('No banner found to delete.');
    }
    banner.remove()
        .then(() => res.status(200).json(id))
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
