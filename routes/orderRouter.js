var express=require('express');
var router=express.Router();
var order=require('../model/orderModel');
router.get('/',function(req,res,next){

    order.getAllorder(function(err,rows){
        if(err){
            res.json(err);
            
        }
        else{
            
            res.json(rows);
        }
    });
});
module.exports=router;