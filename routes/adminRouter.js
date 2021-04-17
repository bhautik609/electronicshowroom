var express=require('express');
var router=express.Router();
var user=require('../model/userModel');

router.get('/:u_EmailId',function(req,res,next){
    
    user.getuserByEmail(req.params.u_EmailId,function(err,rows){
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
    module.exports=router;