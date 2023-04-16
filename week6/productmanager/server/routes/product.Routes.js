const ProductController = require("../controllers/product.controller"); 
module.exports = (app) => {
    app.get("/api/allProducts", ProductController.getAllProducts);
    app.post("/api/newProducts", ProductController.createProduct);
    app.get("/api/oneProducts/:id", ProductController.getOneProduct);
    app.put("/api/updateProducts/:id", ProductController.updateProduct);
    app.delete("/api/deleteproducts/:id", ProductController.deleteProduct);
};