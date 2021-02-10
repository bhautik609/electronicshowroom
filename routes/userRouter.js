var express=require('express');
var router=express.Router();
var user=require('../model/userModel');
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
router.post('/',function(req,res,next){
    
    user.adduser(req.body,function(err,rows){
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
    router.put('/',function(req,res,next){
      user.edituser(req.body,function(err,rows){
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