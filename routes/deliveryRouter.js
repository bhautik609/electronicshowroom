var express=require('express');
var router=express.Router();
var delivery=require('../model/deliveryModel');
router.get('/',function(req,res,next){

    delivery.getAlldelivery(function(err,rows){
        if(err){
            res.json(err);
            
        }
        else{
            
            res.json(rows);
        }
    });
});
module.exports=router;