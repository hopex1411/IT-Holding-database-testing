const {
    getHome
} = require('../controllers/home.controller');
    
module.exports = function (app) {

    // ADMIN PANEL --------------------------------------------------------------------------------------------------
    
    app.get('/', getHome);

}
    
