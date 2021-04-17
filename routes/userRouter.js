var express=require('express');
var router=express.Router();
var user=require('../model/userModel');
var multer = require('multer');
var path = require('path');
const { use } = require('./users');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/user')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});
var upload = multer({storage: storage});
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
// router.post('/',function(req,res,next){
    
//     user.adduser(req.body,function(err,rows){
//           if(err)
//           {
//               res.json(err);
  
//           }
//           else
//           {
//               res.json(rows)
//           }
  
//       });
//   });
router.post('/',upload.single('user_img'),function(req,res,next){
    console.log(req.file);
    console.log(req.body);
    user.adduser(req.body,req.file.filename,function(err,rows){
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
    user.deluser(req.params.id,function(err,rows){
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
      user.getuserbyId(req.params.id,function(err,rows){
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
//       user.edituser(req.body,function(err,rows){
//         if(err){
//             res.json(err);
//         }
//         else
//         {
//             res.json(rows);
//         }
//       });
//    });
   router.put('/:user_id',upload.single('user_img'), function (req, res, next) {
    console.log(req.file);
    console.log(req.body);
    user.edituser(req.params.user_id,req.body,req.file!= null ? req.file.filename : req.body.user_img,function (err, rows) {
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

module.exports=router;