const db = require('../config/mysql2');
const bcrypt = require('bcryptjs');

exports.getLoginForm = async function (req, res, next) {
    res.render('login', {
        title: 'Logind ind'
    });

    //console.log(bcrypt.hashSync('1234', 10));
};

exports.loginUser = async function (req, res, next) {
    const userSQL = `SELECT id, username, password
    FROM users
    WHERE username = :username`;

    const [rows] = await db.query(userSQL, {
        username: req.fields.username
    });

    if (rows.length < 1) {
        res.redirect('/login');
        return;
    };

    if ( bcrypt.compareSync(req.fields.password, rows[0].password) ) {
        req.session.isLoggedIn = true;
        res.redirect('/admin');
        return;
    }
    
    res.redirect('/login');
};

exports.logoutUser = async function (req, res, next) {
    req.session.isLoggedIn = false;
    res.redirect('/');
};