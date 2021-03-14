var express=require('express');
var router=express.Router();
var product=require('../model/productModel');
var multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/product')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});
var upload = multer({storage: storage});
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
router.post('/',upload.single('product_img1','product_img2'),function(req,res,next){
    console.log(req.file);
    product.addproduct(req.body,req.file.filename,function(err,rows){
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