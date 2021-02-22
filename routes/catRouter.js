var express=require('express');
var router=express.Router();
var cat=require('../model/catModel');
router.get('/',function(req,res,next){
console.log(req.body);
    cat.getAllCat(function(err,rows){
        if(err){
            res.json(err);
            
        }
        else{
            
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
    
    cat.addCat(req.body,function(err,rows){
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
  cat.delcat(req.params.id,function(err,rows){
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
    cat.getCatById(req.params.id,function(err,rows){
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
      //consol.log(req.body);
    cat.editCat(req.body,function(err,rows){
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