var express = require('express');
var router = express.Router();
var Dboyall = require('../model/deliveryModel');

router.get('/', function (req, res, next) {
    Dboyall.getAllDBoyFromAdmin(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    })
})

module.exports = router;