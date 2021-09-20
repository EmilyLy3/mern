const ProductController = require("../controllers/products.controller");


module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts);
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.post("/api/products", ProductController.createProduct);
    app.put("/api/products/:id", ProductController.updateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
}