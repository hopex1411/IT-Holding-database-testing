exports.getHome = async function (req, res, next) {
    try {

        const homeProductsSQL =`SELECT *
        FROM bolig
        ORDER BY rand()
        LIMIT 1`;
        
        const [rows2] = await db.query(homeProductsSQL);

        res.render('sidemenu', {
            homeMainResult: rows2[0]
        });
    } catch (error) {
        console.error(error);
        res.render('error');
    }
    
}

