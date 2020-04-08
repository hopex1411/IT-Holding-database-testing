const {getRoles, editRole, showAdminEditRoleForm} = require('../controllers/roles.controller');
const isAuthorized = require('../middleware/is-authenticated');

module.exports = function (app) {
    app.get('/admin/oplysninger', [isAuthorized], getRoles);
    app.get('/admin/editOplysninger/:id', [isAuthorized], showAdminEditRoleForm);
    app.post('/admin/editOplysninger/:id', [isAuthorized], editRole);
}