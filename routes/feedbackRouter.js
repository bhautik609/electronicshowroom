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
  router.post('/', function (req, res, next) {
    feedback.AddFeedback(req.body, function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        }
        if (rows) {
            res.json(rows);
        }
    });
});

module.exports=router;