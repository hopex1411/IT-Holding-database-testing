const {createComputer, getEditComputerForm, editComputer, deleteComputer, getAdminComputers} = require('../controllers/computers.controller');

module.exports = function (app) {
    app.post('/computers', createComputer);
    app.get('/editComputer/:id', getEditComputerForm);
    app.post('/editComputer/:id', editComputer);
    app.get('/deleteComputer/:id', deleteComputer);
    app.get('/computers/', getAdminComputers);
}