var express=require('express');
var router=express.Router();
var feedback=require('../model/feedbckModel');
router.get('/',function(req,res,next){

    feedback.getAllfeedback(function(err,rows){
        if(err){
            res.json(err);
            
        }
        else{
            
            res.json(rows);
        }
    });
});
router.delete('/:id',function(req,res,next){
    feedback.delfeedback(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
  });
module.exports=router;