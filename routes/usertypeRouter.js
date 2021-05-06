var express = require('express');
var router = express.Router();
var ad = require('../model/userModel');
router.get('/:Type', function (req, res, next) {

    ad.getAllUsersAccordingtoType(req.params.Type,function (err, rows) {
        console.log(res);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;