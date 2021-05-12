var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'bhautikprajapati609@gmail.com',
        pass:"7984501900bhautik"
    }
});
var mailOption={
    from:'bhautikprajapati609@gmail.com',
    to:'flayingfethersbhautik@gmail.com',
    subject:"you tube tutorial",
    text:'hiiiiiiii'
};
transporter.sendMail(mailOption,function(error,info){
    if(error){
        console.log(error);
    }
    else{
       console.log("emailsent ",+info.response);
    }
    
});