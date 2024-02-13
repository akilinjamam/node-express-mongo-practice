const products = require("../model/product.model");
const path = require('path');

exports.getProducts = (req, res) => {
    res.sendFile(path.join(__dirname + "/../view/product.html"))
}

exports.postProducts = (req, res) => {
    const name = req.body.name;
    const price = Number(req.body.price);

    const data = {
        name,
        price
    };

    products.push(data);

    res.status(200).json({
        success: true,
        message: products
    })
}