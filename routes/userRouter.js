var express=require('express');
var router=express.Router();
var user=require('../model/userModel');
router.get('/',function(req,res,next){

    user.getAlluser(function(err,rows){
        if(err){
            res.json(err);
            
        }
        else{
            
            res.json(rows);
        }
    });
});
module.exports=router;