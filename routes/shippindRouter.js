var express=require('express');
var router=express.Router();
var shpping=require('../model/userModel');


router.put('/:user_id', function (req, res, next) {
    shpping.updateShippingDetail(req.params.user_id, req.body, function (err, rows) {
        //console.log('fns call');
        console.log(req.params.user_id);
        console.log(req.body)
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports=router;