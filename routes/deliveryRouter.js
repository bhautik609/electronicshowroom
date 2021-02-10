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
router.post('/',function(req,res,next){
    
    delivery.adddelivery(req.body,function(err,rows){
        if(err)
        {
            res.json(err);

        }
        else
        {
            res.json(rows)
        }

    });
});
router.delete('/:id',function(req,res,next){
  delivery.deldelivery(req.params.id,function(err,rows){
      if(err){
          res.json(err);
      }
      else{
          res.json(rows);
      }
  });
});
router.get('/:id',function(req,res,next){
    console.log(req.body)
    delivery.getdeliverybyId(req.params.id,function(err,rows){
        if(err){
            res.json(err);
  
        }
        else
        {
            res.json(rows);
        }
  
    });
  });
  router.put('/',function(req,res,next){
    delivery.editdelivary(req.body,function(err,rows){
      if(err){
          res.json(err);
      }
      else
      {
          res.json(rows);
      }
    });
 });

module.exports=router;