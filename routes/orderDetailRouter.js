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
router.post('/',function(req,res,next){
    
    orderdetail.addorderdetail(req.body,function(err,rows){
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
  orderdetail.delorderdetail(req.params.id,function(err,rows){
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
    orderdetail.getorderdetailbyId(req.params.id,function(err,rows){
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
    orderdetail.editorderdetail(req.body,function(err,rows){
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