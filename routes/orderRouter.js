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
router.post('/',function(req,res,next){
    
  order.addorder(req.body,function(err,rows){
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
  order.delorder(req.params.id,function(err,rows){
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
    order.getorderbyId(req.params.id,function(err,rows){
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
    order.editorder(req.body,function(err,rows){
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