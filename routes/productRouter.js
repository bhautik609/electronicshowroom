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
router.post('/',upload.single('product_img1'),function(req,res,next){
      console.log(req.file);
      product.addproduct(req.body,req.file.filename,function(err,rows){
            if(err)
            {
                res.json(err);
  
            }
            else
            {
                res.json(rows);
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
  router.get('/:product_id',function(req,res,next){
      console.log(req.body)
      product.getproductbyId(req.params.product_id,function(err,rows){
          if(err){
              res.json(err);
    
          }
          else
          {
              res.json(rows);
          }
    
      });
    });
//     router.put('/',function(req,res,next){
//       product.editproduct(req.body,function(err,rows){
//         if(err){
//             res.json(err);
//         }
//         else
//         {
//             res.json(rows);
//         }
//       });
//    });
// router.put('/',upload.single('product_img1'),function(req,res,next){
//     console.log(req.file);
//     product.editproduct(req.body,req.file.fieldname,function(err,rows){
//       if(err){
//           res.json(err);
//       }
//       else
//       {
//           res.json(rows);
//       }
//     });
//  });
router.put('/:product_id',upload.single('product_img1'), function (req, res, next) {
    console.log(req.file);
    product.editproduct(req.params.product_id,req.body,req.file!= null ? req.file.filename : req.body.product_img1,function (err, rows) {
        if (err) {
            console.log('error');
            res.json(err);
        }
        else {
            console.log('rows');
            res.json(rows);
        }
    });
});
//    router.get('/',function(req,res,next){
//        console.log(req.body);
//     product.getproductbyId(req.body,function(err,rows){
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json(rows);
//         }
//     });
// });
module.exports=router;