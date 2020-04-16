const db = require('../config/mysql2');

// ADMIN PANEL --------------------------------------------------------------------------------------------------

exports.createMouse = async function (req, res, next) {
    try {

        const mouseSQL = `INSERT INTO mice SET brand = :brand, model_number = :model_number, connections = :connections;`;
        await db.query(mouseSQL, {
            brand: req.fields.brand,
            model_number: req.fields.model_number,
            connections: req.fields.connections
        });
        res.redirect('/mice');
    } catch (error) {
        console.error(error);
        res.send('Fejl!');
    } 
}

exports.getAdminMice = async function (req, res, next) {
    
    try {
        const mouseSQL = `SELECT *
        FROM mice;`;

        const [rows] = await db.query(mouseSQL);

        res.render('admin_mice', {
            results: rows
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }

};

exports.getEditMouseForm = async function (req, res, next) {
    try {
        const mouseSQL = `SELECT * FROM mice WHERE id = :id`;

        const [rows] = await db.query(mouseSQL, { id: req.params.id });

        res.render('admin_mice_edit', {
        results: rows[0]
    });
} catch (error) {
    console.error(error);
    res.send('FEJL!!!');
}
};

exports.editMouse = async function (req, res, next) {
    try {
        const mouseSQL = `UPDATE mice SET brand = :brand, model_number = :model_number, connections = :connections WHERE id = :id;`;
        await db.query(mouseSQL, {
            id: req.params.id,
            brand: req.fields.brand,
            model_number: req.fields.model_number, 
            connections: req.fields.connections
        });
        const path = req.route.path.replace(':id', '');
        res.redirect('/mice');
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.deleteMouse = async function (req, res, next) {
    try {
        const mouseSQL = `DELETE FROM mice WHERE id = :id;`;

        await db.query(mouseSQL, {
            id: req.params.id
        });

        res.redirect('/mice');
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }
};



