const {
    getOpenhours,
    showAdminEditOpenhoursForm, editOpenhours
} = require('../controllers/categories.controller');
const isAuthorized = require('../middleware/is-authenticated');

module.exports = function (app) {
    // Read
    app.get('/admin/openhours', [isAuthorized], getOpenhours);
    
    // Update
    app.get('/admin/editOpenhours/:id', [isAuthorized], showAdminEditOpenhoursForm);
    app.post('/admin/editOpenhours/:id', [isAuthorized], editOpenhours)
};