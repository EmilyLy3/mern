const mongoose = require("mongoose");

// instructions for what the table should look like
const JokeSchema = new mongoose.Schema({
    // specify fields that the table should have with or without validations
    setUp: {
        type: String,
        required:[true, "Setup is required!"],
        minlength: [10, "Setup must be at least 10 characters"]
    },
    punchLine: {
        type: String,
        required:[true, "Punchline is required!"],
        minlength: [3, "Punchline must be at least 3 characters"]
    }
})

// register the above code as a table in mongodb
const Joke = mongoose.model("Joke", JokeSchema )

module.exports = Joke;