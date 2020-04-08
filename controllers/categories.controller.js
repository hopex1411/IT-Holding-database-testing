const db = require('../config/mysql2');

exports.getOpenhours = async function (req, res, next) {
    
    try {
        const openhourSQL = `SELECT *
        FROM openhours`;

        const [rows, fields] = await db.query(openhourSQL);
        
        res.render('admin_openhours', {
            results: rows
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }

};

exports.showAdminEditOpenhoursForm = async function (req, res, next) {
    try {
        const openhoursSQL = `SELECT *
        FROM openhours
        WHERE id = :id;`;

        const [rows] = await db.query(openhoursSQL, { id: req.params.id });

        res.render('admin_openhours_edit', {
            result: rows[0]
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.editOpenhours = async function (req, res, next) {
    try {
        const rolesSQL = `UPDATE openhours SET time = :time
        WHERE id = :id;`;

        await db.query(rolesSQL, {
            id: req.params.id,
            time: req.fields.time
        });
        
        const path = req.route.path.replace(':id', '');

        res.redirect(path + req.params.id);
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};