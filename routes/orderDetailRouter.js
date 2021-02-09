var express=require('express');
var router=express.Router();
var orderdetail=require('../model/orderDetailModel');
router.get('/',function(req,res,next){

    orderdetail.getAllorderdetail(function(err,rows){
        if(err){
            res.json(err);
            
        }
        else{
            
            res.json(rows);
        }
    });
});
module.exports=router;