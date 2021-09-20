const Joke = require("../models/jokes.model")


module.exports.helloWorld = (req, res) => {
    res.json({message: "Hello World"});
};

module.exports.findAllJokes = (req, res) => {
    console.log("Finding all jokes!")
    Joke.find()
        .then(allJokes => {
            res.json({results: allJokes})
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.findOneJoke = (req, res) => {
    console.log("Finding one joke by id --> ", req.params.id)
    Joke.findOne({ _id: req.params.id })
        .then(foundJoke => res.json({results: foundJoke}))
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.createJoke = (req, res) => {
    console.log("Creating new joke!")
    Joke.create(req.body)
        .then(newJokeObj => {
            res.json({results: newJokeObj})
        })
        .catch(err => {
            res.json({err: err})
        })
}


module.exports.updateJoke = (req, res) => {
    console.log("Updating joke with the id --> ", req.params.id)
    Joke.findOneAndUpdate(
        {_id: req.params.id}, // finding object by id
        req.body, // passing information from the form to update with
        {new: true, runValidators: true} // new: true displays the updated info and runValidators makes sure updated info conforms to validations
    )
        .then(updatedJoke => {
            res.json({results: updatedJoke})
        })
        .catch(err => {
            res.json({err: err})
        })
}


module.exports.deleteQuote = (req, res) => {
    console.log("Deleting joke with the id --> ", req.params.id)
    Joke.deleteOne({_id: req.params.id})
        .then(deletedQuote => {
            res.json({results: deletedQuote})
        })
        .catch(err => {
            res.json({err: err})
        })
}