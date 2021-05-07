var express = require('express');
var router = express.Router();
var dateUpdate = require('../models/delivery_dashboard_model');

router.post('/', function (req, res, next) {
    dateUpdate.upadteDeliveryDate(req.body, function (err, rows) {
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