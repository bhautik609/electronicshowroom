var express=require('express');
var router=express.Router();
var emp=require('../model/empModel');
router.get('/',function(req,res,next){

    emp.getAllemp(function(err,rows){
        if(err){
            res.json(err);
            
        }
        else{
            
            res.json(rows);
        }
    });
});
router.post('/',function(req,res,next){
    
    emp.addemp(req.body,function(err,rows){
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
  emp.delemp(req.params.id,function(err,rows){
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
    emp.getempbyId(req.params.id,function(err,rows){
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
    emp.editemp(req.body,function(err,rows){
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