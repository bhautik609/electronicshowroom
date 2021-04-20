var express = require('express');
var router = express.Router();
var search_product = require('../model/productModel');
router.get('/:pro_name', function (req, res, next) {
    search_product.searchProduct(req.params.pro_name, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;