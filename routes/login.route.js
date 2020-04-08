const {
    getLoginForm,
    loginUser,
    logoutUser
} = require('../controllers/login.controller');


module.exports = function (app) {
    app.get('/login', getLoginForm);
    app.post('/login', loginUser);
    app.get('/logout', logoutUser)
}