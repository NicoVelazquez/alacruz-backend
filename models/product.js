const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        featured: {
            type:  Boolean,
            required: true
        }
    }
);

module.exports = mongoose.model('Product', productSchema);
