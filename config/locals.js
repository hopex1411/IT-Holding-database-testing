const db = require("./mysql2");

module.exports = function (app) {
    app.use(async function (req, res, next) {
        if (typeof req.app.locals.isLoggedIn == 'undefined') {
            req.app.locals.isLoggedIn = false;
        }

        const kontaktSQL =`SELECT *
        FROM computers
        ORDER BY rand()
        LIMIT 1`;
        
        const [homeMainResult] = await db.query(kontaktSQL);

        req.app.locals.homeMainResult = homeMainResult[0];



        next();
    });
};