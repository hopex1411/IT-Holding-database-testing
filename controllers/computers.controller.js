const db = require('../config/mysql2');

// ADMIN PANEL --------------------------------------------------------------------------------------------------

exports.createComputer = async function (req, res, next) {
    try {

        const computerSQL = `INSERT INTO computers SET brand = :brand, model_number = :model_number, pc_type = :pc_type, ram = :ram, gpu = :gpu, cpu = :cpu, psu = :psu, storage = :storage, ports = :ports, bluetooth = :bluetooth, internet_connection = :internet_connection, operating_system = :operating_system;`;
        await db.query(computerSQL, {
            brand: req.fields.brand,
            model_number: req.fields.model_number,
            pc_type: req.fields.pc_type,
            ram: req.fields.ram,
            gpu: req.fields.gpu,
            cpu: req.fields.cpu,
            psu: req.fields.psu,
            storage: req.fields.storage,
            ports: req.fields.ports,
            bluetooth: req.fields.bluetooth,
            internet_connection: req.fields.internet_connection,
            operating_system: req.fields.operating_system
        });
        res.redirect('/computers');
    } catch (error) {
        console.error(error);
        res.send('Fejl!');
    } 
}

exports.getAdminComputers = async function (req, res, next) {
    
    try {
        const computerSQL = `SELECT *
        FROM computers;`;

        const [rows] = await db.query(computerSQL);

        res.render('admin_computers', {
            results: rows
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }

};

exports.getEditComputerForm = async function (req, res, next) {
    try {
        const computerSQL = `SELECT * FROM computers WHERE id = :id`;

        const [rows] = await db.query(computerSQL, { id: req.params.id });

        res.render('admin_computers_edit', {
        results: rows[0]
    });
} catch (error) {
    console.error(error);
    res.send('FEJL!!!');
}
};

exports.editComputer = async function (req, res, next) {
    try {
        const computerSQL = `UPDATE computers SET brand = :brand, model_number = :model_number, pc_type = :pc_type, ram = :ram, gpu = :gpu, cpu = :cpu, psu = :psu, storage = :storage, ports = :ports, bluetooth = :bluetooth, internet_connection = :internet_connection WHERE id = :id;`;
        await db.query(computerSQL, {
            id: req.params.id,
            brand: req.fields.brand,
            model_number: req.fields.model_number, 
            pc_type: req.fields.pc_type, 
            ram: req.fields.ram, 
            gpu: req.fields.gpu,
            cpu: req.fields.cpu,
            psu: req.fields.psu,
            storage: req.fields.storage,
            ports: req.fields.ports,
            bluetooth: req.fields.bluetooth,
            internet_connection: req.fields.internet_connection,
            operating_system: req.fields.operating_system
        });
        const path = req.route.path.replace(':id', '');
        res.redirect('/computers');
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.deleteComputer = async function (req, res, next) {
    try {
        const computerSQL = `DELETE FROM computers WHERE id = :id;`;

        await db.query(computerSQL, {
            id: req.params.id
        });

        res.redirect('/computers');
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }
};



