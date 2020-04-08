const { 
    getMessages, deleteMessage
} = require('../controllers/users.controller');
const isAuthorized = require('../middleware/is-authenticated');

module.exports = function (app) {

    // Read
    app.get('/admin/messages', [isAuthorized], getMessages);

    // Delete
    app.get('/admin/deleteMessage/:id', [isAuthorized], deleteMessage);
};