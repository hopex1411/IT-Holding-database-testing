const db = require('../config/mysql2');

// ADMIN PANEL --------------------------------------------------------------------------------------------------

exports.createCable = async function (req, res, next) {
    try {

        const cableSQL = `INSERT INTO cables SET connection_type = :connection_type, cable_length = :cable_length, model_number = :model_number, color = :color;`;
        await db.query(cableSQL, {
            connection_type: req.fields.connection_type,
            cable_length: req.fields.cable_length,
            model_number: req.fields.model_number,
            color: req.fields.color
        });
        res.redirect('/cables');
    } catch (error) {
        console.error(error);
        res.send('Fejl!');
    } 
}

exports.getAdminCables = async function (req, res, next) {
    
    try {
        const cableSQL = `SELECT *
        FROM cables;`;

        const [rows] = await db.query(cableSQL);

        res.render('admin_cables', {
            results: rows
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }

};

exports.getEditCableForm = async function (req, res, next) {
    try {
        const cableSQL = `SELECT * FROM cables WHERE id = :id`;

        const [rows] = await db.query(cableSQL, { id: req.params.id });

        res.render('admin_cables_edit', {
        results: rows[0]
    });
} catch (error) {
    console.error(error);
    res.send('FEJL!!!');
}
};

exports.editCable = async function (req, res, next) {
    try {
        const cableSQL = `UPDATE cables SET connection_type = :connection_type, cable_length = :cable_length, model_number = :model_number, color = :color WHERE id = :id;`;
        await db.query(cableSQL, {
            id: req.params.id,
            connection_type: req.fields.connection_type,
            cable_length: req.fields.cable_length, 
            model_number: req.fields.model_number, 
            color: req.fields.color
        });
        const path = req.route.path.replace(':id', '');
        res.redirect('/cables');
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.deleteCable = async function (req, res, next) {
    try {
        const cableSQL = `DELETE FROM cables WHERE id = :id;`;

        await db.query(cableSQL, {
            id: req.params.id
        });

        res.redirect('/cables');
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }
};



