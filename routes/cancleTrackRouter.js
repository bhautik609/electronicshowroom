var express = require('express');
var router = express.Router();
var CancelOrder = require('../model/trackModel');
router.delete('/:fk_detail_id', function (req, res, next) {
    CancelOrder.CancelTrack(req.params.fk_detail_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;