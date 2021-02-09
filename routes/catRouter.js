var express=require('express');
var router=express.Router();
var cat=require('../model/catModel');
router.get('/',function(req,res,next){

    cat.getAllCat(function(err,rows){
        if(err){
            res.json(err);
            
        }
        else{
            
            res.json(rows);
        }
    });
});
module.exports=router;