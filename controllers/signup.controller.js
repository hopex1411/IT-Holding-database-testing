const db = require('../config/mysql2');
const { hashSync } = require('bcryptjs');

/**
 * @module controller/start
 */

/**
 * This function renders the signup.ejs
 * @param {Object} req
 * @param {Function} res
 * @param {Function} next
 */
exports.getSignup = function (req, res, next) {
    
    res.render('signup');

};

/**
 * 
 * @param {Object} req
 * @param {Function} res
 * @param {Function} next
 */
exports.postSignup = async function (req, res, next) {


    // Username is not allowed to be empty
    if ( req.fields.username == '' || !req.fields.username ) {
        req.flash('error', 'Brugernavn må ikke være tomt');
        res.redirect('/signup');
        return;
    };

    // Username is not allowed to have numbers 
    if ( /\d/g.test(req.fields.username) ) {
        req.flash('error', 'Brugernavn må ikke indeholde tal');
        res.redirect('/signup');
        return;
    }

    // Password is not allowed to be empty
    if ( req.fields.password == '' || !req.fields.password ) {
        req.flash('error', 'Kodeord må ikke være tom');
        res.redirect('/signup');
        return;
    };

    try {
        const userSQL = `INSERT INTO users
        SET username = :username, password = :password;`;

        const hashedPassword = hashSync(req.fields.password, 10); 
        
        const user = await db.query(userSQL, {
            password: hashedPassword,
            username: req.fields.username
        });

        res.send('Du er oprettet i systemet');
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.send('Brugernavn eksistere allerede');
        }
        console.error(error);
        res.send('Fejl!!!');
    };
};
