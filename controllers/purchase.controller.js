const db = require('../config/mysql2');

// ADMIN PANEL --------------------------------------------------------------------------------------------------

exports.createPurchase = async function (req, res, next) {
    try {

        const purchaseSQL = `INSERT INTO purchases SET product_name = :product_name, model_number = :model_number, product_link = :product_link, amount = :amount;`;
        await db.query(purchaseSQL, {
            product_name: req.fields.product_name,
            model_number: req.fields.model_number,
            product_link: req.fields.product_link,
            amount: req.fields.amount
        });
        res.redirect('/purchases');
    } catch (error) {
        console.error(error);
        res.send('Fejl!');
    } 
}

exports.getAdminPurchases = async function (req, res, next) {
    
    try {
        const purchaseSQL = `SELECT *
        FROM purchases;`;

        const [rows] = await db.query(purchaseSQL);

        res.render('admin_purchases', {
            results: rows
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }

};

exports.getEditPurchaseForm = async function (req, res, next) {
    try {
        const purchaseSQL = `SELECT * FROM purchases WHERE id = :id`;

        const [rows] = await db.query(purchaseSQL, { id: req.params.id });

        res.render('admin_purchases_edit', {
        results: rows[0]
    });
} catch (error) {
    console.error(error);
    res.send('FEJL!!!');
}
};

exports.editPurchase = async function (req, res, next) {
    try {
        const purchaseSQL = `UPDATE purchases SET product_name = :product_name, model_number = :model_number, product_link = :product_link, amount = :amount WHERE id = :id;`;
        await db.query(purchaseSQL, {
            id: req.params.id,
            product_name: req.fields.product_name,
            model_number: req.fields.model_number, 
            product_link: req.fields.product_link, 
            amount: req.fields.amount
        });
        const path = req.route.path.replace(':id', '');
        res.redirect('/purchases');
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.deletePurchase = async function (req, res, next) {
    try {
        const purchaseSQL = `DELETE FROM purchases WHERE id = :id;`;

        await db.query(purchaseSQL, {
            id: req.params.id
        });

        res.redirect('/purchases');
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }
};



