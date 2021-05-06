var express=require('express');
var router=express.Router();
var OrderAssign=require('../model/deliveryModel');
router.post('/',function(req,res,next){
    OrderAssign.AddOrderAssigned(req.body,function(err,rows){ 
        console.log(req.body); 
        console.log("insert");                 //Insert
        if(err)
        {
            res.json(err);
        }
        if(rows)
        {
            res.json(rows);    
        }
    });        
});
module.exports=router;