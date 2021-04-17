var express = require('express');
var router = express.Router();
var emailsend=require("../model/emailModel");
router.post('/',function(req,res,next){
    console.log("route");
    emailsend.sendMail(req.body,function(err,message){
        if(err)
        {
            console.log(err);
            console.log(req.body);
            res.json(err);
        }
        else{
            return res.json({success: true, msg: 'sent'});
        }
    });
});
module.exports=router; 