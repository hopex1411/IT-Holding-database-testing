const db = require('../config/mysql2');
const fs = require('fs');
const uploadDir = `./public/img/uploads/`;

// Client Site ---------------------------------------------------------------------------------------------------

exports.getAllFrontendProducts = async function (req, res, next) {
    try {
        const asideSQL =`SELECT *
        FROM bolig
        ORDER BY rand()
        LIMIT 1`;
        
        const [row] = await db.query(asideSQL);

    const productsSQL = `SELECT * FROM bolig`;

    const [rows] = await db.query(productsSQL);

    res.render('products', {'results': rows, 'result':row[0] });
    } catch (error) {
        console.error(error);
        res.send('Fejl!');
    }
    
    
}

exports.getAllFrontendProductsFromCategory = async function (req, res, next) {

    if ( req.query.page != undefined ) {
        if ( parseInt(req.query.page) < 1 ) {
            res.redirect('/products/' + req.params.id);
            return;
        }
        if ( parseInt(req.query.page) >= 1 ) {
            currentPage = parseInt(req.query.page);
        }
    }

    let [result] = await db.query(`SELECT COUNT(*) AS total_items FROM bolig`);
    let totalItems = result[0].total_items;

    offset = (currentPage - 1) * itemsPrPage;

    totalPages = Math.ceil(totalItems / itemsPrPage);

    if (offset > totalItems) {
        res.redirect('/products/' + req.params.id + '?page=' + totalPages);
        return;
    }
    
    const productsSQL = `SELECT *
    FROM bolig
    LIMIT :offset:, :items_pr_page:`;

    const [rows] = await db.query(productsSQL, { 
        id: req.params.id,
        offset: offset,
        items_pr_page: itemsPrPage
    });

        
    res.render('products', {
        results: rows,
        total_pages: totalPages,
        current_page: currentPage
    });
}

exports.getSingleProduct = async function (req, res, next) {
    try {
        const productSQL = `SELECT *
        FROM bolig
        WHERE bolig.id = :id`;

        const [rows] = await db.query(productSQL, { 
            id: req.params.id 
        });

        res.render('single-product', {
            result: rows[0]
        });
    } catch (error) {
        console.error(error);
        res.send('Fejl!');
    }
}


// ADMIN PANEL --------------------------------------------------------------------------------------------------

exports.createProduct = async function (req, res, next) {
    try {
        const data = fs.readFileSync(req.files.image.path);
        const newFileName = Date.now() + '_' + req.files.image.image;
        fs.writeFileSync(uploadDir + newFileName, data);

        const productSQL = `INSERT INTO bolig SET sagsnummer = :sagsnummer, boligtype = :boligtype, boligsize = :boligsize, grunareal = :grunareal, pris = :pris, brutto = :brutto, netto = :netto, boligtitle = :boligtitle, boligtext = :boligtext, postnr = :postnr, vej = :vej, \`by\` = :by, image = :image;`;
        await db.query(productSQL, {
            sagsnummer: req.fields.sagsnummer,
            boligtype: req.fields.boligtype,
            boligsize: req.fields.boligsize,
            grunareal: req.fields.grunareal,
            pris: req.fields.pris,
            brutto: req.fields.brutto,
            netto: req.fields.netto,
            boligtitle: req.fields.boligtitle,
            boligtext: req.fields.boligtext,
            by: req.fields.by,
            postnr: req.fields.postnr,
            vej: req.fields.vej,
            image: newFileName
        });
        res.redirect('/admin/products');
    } catch (error) {
        console.error(error);
        res.send('Fejl!');
    } 
}

exports.getProducts = async function (req, res, next) {
    
    try {
        const productsSQL = `SELECT *
        FROM bolig;`;

        const [rows] = await db.query(productsSQL);

        res.render('admin_products', {
            results: rows
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }

};

exports.getEditProductForm = async function (req, res, next) {
    try {
        const productsSQL = `SELECT * FROM bolig WHERE image = :image_params`;

        const [rows] = await db.query(productsSQL, { image_params: req.params.image_params });

        res.render('admin_products_edit', {
            result: rows[0],
            image_params: req.params.image_params
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }
};

exports.editProduct = async function (req, res, next) {
    try {
        const productSQL = `UPDATE bolig SET sagsnummer = :sagsnummer, boligtype = :boligtype, boligsize = :boligsize, grunareal = :grunareal, pris = :pris, brutto = :brutto, netto = :netto, boligtitle = :boligtitle, boligtext = :boligtext, postnr = :postnr, \`by\` = :by, vej = :vej
        WHERE image = :image_params;`;
        await db.query(productSQL, {
            image_params: req.params.image_params,
            sagsnummer: req.fields.sagsnummer, 
            boligtype: req.fields.boligtype, 
            boligsize: req.fields.boligsize, 
            grunareal: req.fields.grunareal,
            pris: req.fields.pris,
            brutto: req.fields.brutto,
            netto: req.fields.netto,
            boligtitle: req.fields.boligtitle,
            boligtext: req.fields.boligtext,
            postnr: req.fields.postnr,
            by: req.fields.by,
            vej: req.fields.vej
        });
        res.redirect('/admin/editProduct/' + req.params.image_params);
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.editProductImg = async function (req, res, nexT) {
    try {
        const data = fs.readFileSync(req.files.image.path);
        const newFileName = Date.now() + '_' + req.files.image.image;
        fs.unlinkSync(uploadDir + req.params.image_params);
        fs.writeFileSync(uploadDir + newFileName, data);

        const productImgSQL = `UPDATE bolig SET image = :image 
        WHERE image = :image_params`;

        await db.query(productImgSQL, {
            image: newFileName,
            image_params: req.params.image_params
        });

        res.redirect('/admin/editProduct/' + newFileName);  
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }
}

exports.deleteProduct = async function (req, res, next) {
    try {
        const productSQL = `DELETE FROM bolig WHERE id = :id;`;

        await db.query(productSQL, {
            id: req.params.id
        });

        res.redirect('/admin/products');
    } catch (error) {
        console.error(error);
        res.send('FEJL!');
    }
};



