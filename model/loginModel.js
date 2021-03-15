var db=require('../dbconnection');
var login={
    addadmin:function(data,callback){
        return db.query('select * from user_tbl where user_email=? and user_password=? and user_type=?',[data.login_username,data.login_password,0],callback);  
      },
      checkCustomer:function(data,callback){
        return db.query('select * from user_tbl where user_email=? and user_password=? and user_type=?',[data.login_username,data.login_password,1],callback);
      }
};
module.exports=login; 