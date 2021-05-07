var express = require('express');
var router = express.Router();
var detail = require('../model/deliveryModel');

router.get('/:fk_u_EmailId', function (req, res, next) {
    detail.getAllMemberOrderOfLoginD_Boy(req.params.fk_u_EmailId, function (err, rows) {
        // console.log(req.params.fk_u_EmailId);
        if (err) {

            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.put('/:track_id', function (req, res, next) {
    detail.updateTrack(req.params.track_id, req.body, function (err, rows) {
        console.log('inside update function');
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