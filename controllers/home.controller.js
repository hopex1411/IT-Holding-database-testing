const db = require('../config/mysql2');

// ADMIN PANEL --------------------------------------------------------------------------------------------------

exports.getHome = async function (req, res, next) {
    res.render('admin_home');
}