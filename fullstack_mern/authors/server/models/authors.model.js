const mongoose = require("mongoose");

// instructions for what the table should look like
const AuthorsSchema = new mongoose.Schema({
    // specify fields that the table should have with or without validations
    name: {
        type: String,
        required:[true, "Name is required!"],
        minlength: [3, "Name must be at least 3 characters"]
    }
})

// register the above code as a table in mongodb
const Author = mongoose.model("Author", AuthorsSchema )

module.exports = Author;