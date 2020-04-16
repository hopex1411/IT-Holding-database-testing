const db = require('../config/mysql2');

// ADMIN PANEL --------------------------------------------------------------------------------------------------

exports.createKeyboard = async function (req, res, next) {
    try {

        const keyboardSQL = `INSERT INTO keyboards SET brand = :brand, model_number = :model_number, connections = :connections;`;
        await db.query(keyboardSQL, {
            brand: req.fields.brand,
            model_number: req.fields.model_number,
            connections: req.fields.connections
        });
        res.redirect('/keyboards');
    } catch (error) {
        console.error(error);
        res.send('Fejl!');
    } 
}

exports.getAdminKeyboards = async function (req, res, next) {
    
    try {
        const keyboardSQL = `SELECT *
        FROM keyboards;`;

        const [rows] = await db.query(keyboardSQL);

        res.render('admin_keyboards', {
            results: rows
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }

};

exports.getEditKeyboardForm = async function (req, res, next) {
    try {
        const keyboardSQL = `SELECT * FROM keyboards WHERE id = :id`;

        const [rows] = await db.query(keyboardSQL, { id: req.params.id });

        res.render('admin_keyboards_edit', {
        results: rows[0]
    });
} catch (error) {
    console.error(error);
    res.send('FEJL!!!');
}
};

exports.editKeyboard = async function (req, res, next) {
    try {
        const keyboardSQL = `UPDATE keyboards SET brand = :brand, model_number = :model_number, connections = :connections WHERE id = :id;`;
        await db.query(keyboardSQL, {
            id: req.params.id,
            brand: req.fields.brand,
            model_number: req.fields.model_number, 
            connections: req.fields.connections
        });
        const path = req.route.path.replace(':id', '');
        res.redirect('/keyboards');
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.deleteKeyboard = async function (req, res, next) {
    try {
        const keyboardSQL = `DELETE FROM keyboards WHERE id = :id;`;

        await db.query(keyboardSQL, {
            id: req.params.id
        });

        res.redirect('/keyboards');
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }
};



