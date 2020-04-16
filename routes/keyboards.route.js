const {createKeyboard, getEditKeyboardForm, editKeyboard, deleteKeyboard, getAdminKeyboards} = require('../controllers/keyboards.controller');

module.exports = function (app) {
    app.post('/keyboards', createKeyboard);
    app.get('/editKeyboards/:id', getEditKeyboardForm);
    app.post('/editKeyboards/:id', editKeyboard);
    app.get('/deleteKeyboards/:id', deleteKeyboard);
    app.get('/keyboards/', getAdminKeyboards);
}