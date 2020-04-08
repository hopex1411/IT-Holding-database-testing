const {
    getHome,
    getAdminHome
} = require('../controllers/home.controller');
const isAuthorized = require('../middleware/is-authenticated');
    
module.exports = function (app) {
    
    // Client Site ---------------------------------------------------------------------------------------------------
    
    app.get('/', getHome);


    // ADMIN PANEL --------------------------------------------------------------------------------------------------
    
    app.get('/admin', [isAuthorized], getAdminHome);

}
    
