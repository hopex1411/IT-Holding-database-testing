const { 
    getAllFrontendProducts, getAllFrontendProductsFromCategory, getSingleProduct,
    createProduct,
    getProducts,
    getEditProductForm, editProduct, editProductImg,
    deleteProduct
} = require('../controllers/products.controller');
const isAuthorized = require('../middleware/is-authenticated');

module.exports = function (app) {

    // Client Site ---------------------------------------------------------------------------------------------------
    app.get('/products', getAllFrontendProducts);
    app.get('/products/:id', getAllFrontendProductsFromCategory);
    app.get('/product/:id', getSingleProduct);

    // ADMIN PANEL ---------------------------------------------------------------------------------------------------

    // Create 
    app.post('/admin/products', [isAuthorized], createProduct);

    // Read
    app.get('/admin/products', [isAuthorized], getProducts);
    
    // Update
    app.get('/admin/editProduct/:image_params', [isAuthorized], getEditProductForm);
    app.post('/admin/editProduct/:image_params', [isAuthorized], editProduct);
    app.post('/admin/editProduct/image/:image_params', [isAuthorized], editProductImg);

    // Delete
    app.get('/admin/deleteProduct/:id', [isAuthorized], deleteProduct);
};