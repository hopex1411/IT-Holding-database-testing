const {createPurchase, getEditPurchaseForm, editPurchase, deletePurchase, getAdminPurchases} = require('../controllers/purchase.controller');

module.exports = function (app) {
    app.post('/purchases', createPurchase);
    app.get('/editPurchases/:id', getEditPurchaseForm);
    app.post('/editPurchases/:id', editPurchase);
    app.get('/deletePurchases/:id', deletePurchase);
    app.get('/purchases/', getAdminPurchases);
}