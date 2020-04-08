const db = require('../config/mysql2');

exports.getKontakt = async function (req, res, next) {
    try {
        const openhoursSQL =`SELECT *
        FROM openhours`;
        
        const [rows] = await db.query(openhoursSQL);

        const productsSQL = `SELECT * FROM kontaktoplysninger`;

        const [row] = await db.query(productsSQL);

    res.render('kontakt', {'results': rows, 'result':row[0] });
    } catch (error) {
        console.error(error);
        res.render('error');
    }
}
exports.postKontakt = async function (req, res, next) {
    try {
        const productSQL = `INSERT INTO kontakt SET navn = :navn, adresse = :adresse, telefon = :telefon, email = :email, kommentar = :kommentar`;
        await db.query(productSQL, {
            navn: req.fields.navn,
            adresse: req.fields.adresse,
            telefon: req.fields.telefon,
            email: req.fields.email,
            kommentar: req.fields.kommentar
        });
        res.redirect('/kontakt');
    } catch (error) {
        console.error(error);
        res.send('Fejl!');
    } 
}