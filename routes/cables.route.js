const {createCable, getEditCableForm, editCable, deleteCable, getAdminCables} = require('../controllers/cables.controller');

module.exports = function (app) {
    app.post('/cables', createCable);
    app.get('/editCables/:id', getEditCableForm);
    app.post('/editCables/:id', editCable);
    app.get('/deleteCables/:id', deleteCable);
    app.get('/cables/', getAdminCables);
}