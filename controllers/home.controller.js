const db = require('../config/mysql2');

// Client Site ---------------------------------------------------------------------------------------------------

exports.getHome = async function (req, res, next) {
    try {

        const homeProductsSQL =`SELECT *
        FROM bolig
        ORDER BY rand()
        LIMIT 1`;
        
        const [rows2] = await db.query(homeProductsSQL);

        res.render('home', {
            homeMainResult: rows2[0]
        });
    } catch (error) {
        console.error(error);
        res.render('error');
    }
}


// ADMIN PANEL --------------------------------------------------------------------------------------------------

exports.getAdminHome = async function (req, res, next) {
    res.render('admin_home');
}