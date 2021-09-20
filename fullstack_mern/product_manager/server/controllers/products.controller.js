const Product = require("../models/products.model");


module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => {
            res.json({results: allProducts})
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(foundProduct => res.json({results: foundProduct}))
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProductObj => {
            res.json({results: newProductObj})
        })
        .catch(err => {
            res.json({err: err})
        })
}


module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id}, // finding object by id
        req.body, // passing information from the form to update with
        {new: true, runValidators: true} // new: true displays the updated info and runValidators makes sure updated info conforms to validations
    )
        .then(updatedProduct => {
            res.json({results: updatedProduct})
        })
        .catch(err => {
            res.json({err: err})
        })
}


module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct => {
            res.json({results: deletedProduct})
        })
        .catch(err => {
            res.json({err: err})
        })
}