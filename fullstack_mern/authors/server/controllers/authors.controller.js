const Author = require("../models/authors.model");


module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => {
            res.json({results: allAuthors})
        })
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(foundAuthor => res.json({results: foundAuthor}))
        .catch(err => {
            res.json({err: err})
        })
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthorObj => {
            res.json({results: newAuthorObj})
        })
        .catch(err => {
            res.json({err: err})
        })
}


module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params.id}, // finding object by id
        req.body, // passing information from the form to update with
        {new: true, runValidators: true} // new: true displays the updated info and runValidators makes sure updated info conforms to validations
    )
        .then(updatedAuthor => {
            res.json({results: updatedAuthor})
        })
        .catch(err => {
            res.json({err: err})
        })
}


module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deletedAuthor => {
            res.json({results: deletedAuthor})
        })
        .catch(err => {
            res.json({err: err})
        })
}