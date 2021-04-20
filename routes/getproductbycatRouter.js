var express = require('express');
var router = express.Router();
var cat = require('../model/productModel');
router.get('/:fk_cat_id', function (req, res, next) {
    console.log('inside get by id rout');
    cat.getProductBycategory(req.params.fk_cat_id,function (err, rows) {
        console.log('inside get by id function');
        if (err) {
            console.log('error');
            res.json(err);
        }
        else {
            console.log('rows');
            res.json(rows);
        }
    });
});

module.exports = router;