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
router.post('/',function(req,res,next){
    
    product.addproduct(req.body,function(err,rows){
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
    product.delproduct(req.params.id,function(err,rows){
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
      product.getproductbyId(req.params.id,function(err,rows){
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
      product.editproduct(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
      });
   });
   router.get('/',function(req,res,next){
    product.getproductbyId(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;