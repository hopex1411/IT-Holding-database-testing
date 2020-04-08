const db = require('../config/mysql2');

// Client Site ---------------------------------------------------------------------------------------------------

exports.getAllNyheder = async function (req, res, next) {
    try {

    const nyhederSQL = `SELECT * FROM nyheder`;

    const [rows] = await db.query(nyhederSQL);

    res.render('nyheder', {'results': rows});
    } catch (error) {
        console.error(error);
        res.send('Fejl!');
    }
    
}


// ADMIN PANEL --------------------------------------------------------------------------------------------------

exports.getAdminNyheder = async function (req, res, next) {
    try {

    const nyhederSQL = `SELECT * FROM nyheder`;

    const [rows] = await db.query(nyhederSQL);

    res.render('admin_nyheder', {'results': rows});
    } catch (error) {
        console.error(error);
        res.send('Fejl!');
    }
    
}

exports.createNyhed = async function (req, res, next) {
    try {
        const nyhederSQL = `INSERT INTO nyheder SET overskrift = :overskrift, dato = :dato, tekst = :tekst;`;
        await db.query(nyhederSQL, {
            overskrift: req.fields.overskrift,
            dato: req.fields.dato,
            tekst: req.fields.tekst
        });
        res.redirect('/admin/nyheder');
    } catch (error) {
        console.error(error);
        res.send('Fejl!');
    } 
};

exports.deleteNyhed = async function (req, res, next) {
    try {
        const nyhederSQL = `DELETE FROM nyheder WHERE id = :id;`;

        await db.query(nyhederSQL, {
            id: req.params.id
        });

        res.redirect('/admin/nyheder');
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }
};

exports.getNyhed = async function (req, res, next) {
    
    try {
        const nyhederSQL = `SELECT *
        FROM nyheder;`;

        const [rows] = await db.query(nyhederSQL);

        res.render('admin_nyheder', {
            results: rows
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }

};


exports.getEditNyhedForm = async function (req, res, next) {
    try {
        const nyhederSQL = `SELECT id, dato, overskrift, tekst
        FROM nyheder
        WHERE id = :id;`;

        const [rows] = await db.query(nyhederSQL, { id: req.params.id });

        res.render('admin_nyheder_edit', {
            results: rows[0]
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.editNyhed = async function (req, res, next) {
    try {
        const nyhederSQL = `UPDATE nyheder SET overskrift = :overskrift, tekst = :tekst, dato = :dato
        WHERE id = :id;`;

        await db.query(nyhederSQL, {
            overskrift: req.fields.overskrift,
            tekst: req.fields.tekst, 
            dato: req.fields.dato,
            id: req.params.id
        });
        
        const path = req.route.path.replace(':id', '');

        res.redirect(path + req.params.id);
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};



