
const {getAllNyheder, createNyhed, getEditNyhedForm, editNyhed, deleteNyhed, getAdminNyheder} = require('../controllers/nyheder.controller');
const isAuthorized = require('../middleware/is-authenticated');

module.exports = function (app) {
    app.get('/nyheder', getAllNyheder);
    app.post('/admin/nyheder', [isAuthorized], createNyhed);
    app.get('/admin/editNyhed/:id', [isAuthorized], getEditNyhedForm);
    app.post('/admin/editNyhed/:id', [isAuthorized], editNyhed);
    app.get('/admin/deleteNyhed/:id', [isAuthorized], deleteNyhed);
    app.get('/admin/nyheder/', [isAuthorized], getAdminNyheder);
}