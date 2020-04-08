const db = require('../config/mysql2');
const fs = require('fs');

exports.getMessages = async function (req, res, next) {
    
    try {
        const messageSQL = `SELECT *
        FROM kontakt;`;

        const [rows] = await db.query(messageSQL);

        res.render('admin_messages', {
            results: rows
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }

};

exports.deleteMessage = async function (req, res, next) {
    try {
        const messageSQL = `DELETE FROM kontakt WHERE id = :id;`;

        await db.query(messageSQL, {
            id: req.params.id
        });

        res.redirect('/admin/messages');
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }
};