const db = require('../config/mysql2');

exports.getRoles = async function (req, res, next) {
    
    try {
        const rolesSQL = `SELECT *
        FROM kontaktoplysninger`;

        const [rows, fields] = await db.query(rolesSQL);
        
        res.render('admin_oplysninger', {
            results: rows
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }

};

exports.showAdminEditRoleForm = async function (req, res, next) {
    try {
        const rolesSQL = `SELECT *
        FROM kontaktoplysninger
        WHERE id = :id;`;

        const [rows] = await db.query(rolesSQL, { id: req.params.id });

        res.render('admin_oplysninger_edit', {
            result: rows[0]
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.editRole = async function (req, res, next) {
    try {
        const rolesSQL = `UPDATE kontaktoplysninger SET navn = :navn, adresse = :adresse, postnr = :postnr, city = :city, telefon = :telefon, fax = :fax, email = :email
        WHERE id = :id;`;

        await db.query(rolesSQL, {
            id: req.params.id,
            navn: req.fields.navn, 
            adresse: req.fields.adresse,
            postnr: req.fields.postnr,
            city: req.fields.city,
            telefon: req.fields.telefon,
            fax: req.fields.fax,
            email: req.fields.email
        });
        
        const path = req.route.path.replace(':id', '');

        res.redirect(path + req.params.id);
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};