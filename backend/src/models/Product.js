const { default: mongoose, Schema } = require("mongoose");

const ProductSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxLength: 30
    },
    description: {
        type: String,
        price: {
            type: Number.EPSILON,
            default: 0
        }
    },
    images: {
        type: Array,
        default: []
    },
    sold: {
        type: Number,
        default: 0
    },
    continents: {
        type: Number,
        default: 1
    },
    views: {
        type: Number,
        default: 0
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

