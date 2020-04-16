const {createMouse, getEditMouseForm, editMouse, deleteMouse, getAdminMice} = require('../controllers/mice.controller');

module.exports = function (app) {
    app.post('/mice', createMouse);
    app.get('/editMice/:id', getEditMouseForm);
    app.post('/editMice/:id', editMouse);
    app.get('/deleteMice/:id', deleteMouse);
    app.get('/mice/', getAdminMice);
}