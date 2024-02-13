const express = require('express');
const { getProducts, postProducts } = require('../controller/products.controller');


const productRouter = express.Router();


productRouter.get("/products", getProducts)

productRouter.post("/products", postProducts)

module.exports = productRouter;