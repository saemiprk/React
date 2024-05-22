const express = require('express')
const router = express.Router()
const { auth } = require("../middleware/auth")
const Product = require('../models/Product')

router.post('/products', auth, async (req, res, next) => {
    try {
        const products = new Product(req.body);
        products.save();

        return res.sendStatus(201);
    } catch (error) {
        next(error)
    }
})