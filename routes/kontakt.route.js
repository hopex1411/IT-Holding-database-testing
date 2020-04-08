const {
    getKontakt,
    postKontakt,
} = require('../controllers/kontakt.controller');
    
module.exports = function (app) {
    
    // Client Site ---------------------------------------------------------------------------------------------------
    
    app.get('/kontakt', getKontakt);
    app.post('/kontakt', postKontakt);

}