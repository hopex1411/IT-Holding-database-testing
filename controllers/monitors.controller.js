const db = require('../config/mysql2');

// ADMIN PANEL --------------------------------------------------------------------------------------------------

exports.createMonitor = async function (req, res, next) {
    try {

        const monitorSQL = `INSERT INTO monitors SET brand = :brand, size = :size, model_number = :model_number, ports = :ports;`;
        await db.query(monitorSQL, {
            brand: req.fields.brand,
            size: req.fields.size,
            model_number: req.fields.model_number,
            ports: req.fields.ports
        });
        res.redirect('/monitors');
    } catch (error) {
        console.error(error);
        res.send('Fejl!');
    } 
}

exports.getAdminMonitors = async function (req, res, next) {
    
    try {
        const monitorSQL = `SELECT *
        FROM monitors;`;

        const [rows] = await db.query(monitorSQL);

        res.render('admin_monitors', {
            results: rows
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }

};

exports.getEditMonitorForm = async function (req, res, next) {
    try {
        const monitorSQL = `SELECT * FROM monitors WHERE id = :id`;

        const [rows] = await db.query(monitorSQL, { id: req.params.id });

        res.render('admin_monitors_edit', {
        results: rows[0]
    });
} catch (error) {
    console.error(error);
    res.send('FEJL!!!');
}
};

exports.editMonitor = async function (req, res, next) {
    try {
        const monitorSQL = `UPDATE monitors SET brand = :brand, size = :size, model_number = :model_number, ports = :ports WHERE id = :id;`;
        await db.query(monitorSQL, {
            id: req.params.id,
            brand: req.fields.brand,
            size: req.fields.size, 
            model_number: req.fields.model_number, 
            ports: req.fields.ports
        });
        const path = req.route.path.replace(':id', '');
        res.redirect('/monitors');
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.deleteMonitor = async function (req, res, next) {
    try {
        const monitorSQL = `DELETE FROM monitors WHERE id = :id;`;

        await db.query(monitorSQL, {
            id: req.params.id
        });

        res.redirect('/monitors');
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }
};



