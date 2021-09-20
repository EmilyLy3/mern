const mongoose = require("mongoose");

// instructions for what the table should look like
const ProductsSchema = new mongoose.Schema({
    // specify fields that the table should have with or without validations
    title: {
        type: String,
        required:[true, "Title is required!"],
        minlength: [5, "Title must be at least 5 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required!"]
    },
    description: {
        type: String,
        required:[true, "Description is required!"],
        minlength: [5, "Description must be at least 3 characters"]
    }
})

// register the above code as a table in mongodb
const Product = mongoose.model("Product", ProductsSchema )

module.exports = Product;