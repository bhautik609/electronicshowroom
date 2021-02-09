var express=require('express');
var router=express.Router();
var product=require('../model/productModel');
router.get('/',function(req,res,next){

    product.getAllproduct(function(err,rows){
        if(err){
            res.json(err);
            
        }
        else{
            
            res.json(rows);
        }
    });
});
module.exports=router;