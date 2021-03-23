var db=require('../dbconnection');
var login={
    addadmin:function(data,callback){
      console.log(data);
        return db.query('select * from user_tbl where user_email=? and user_password=?',[data.login_username,data.login_password],callback);  
      },
    
};
module.exports=login; 