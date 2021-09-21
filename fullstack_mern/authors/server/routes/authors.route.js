// const AuthorController = require("../controllers/authors.controller");

const AuthorController = require("../controllers/authors.controller")

module.exports = app => {
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.get("/api/authors/:id", AuthorController.findOneAuthor);
    app.post("/api/authors", AuthorController.createAuthor);
    app.put("/api/authors/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
}