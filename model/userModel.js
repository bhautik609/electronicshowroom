var db=require('../dbconnection');
var user={
    getAlluser:function(callback){
        return db.query(' select *  from  user_tbl',callback);
    },
    adduser:function(data,callback){

        return db.query('insert into user_tbl values(?,?,?,?,?,?,?,?,?)',[null,data.user_password,data.user_name,data.user_email,data.user_age,data.user_gender,data.user_mob,data.user_address,data.user_type],callback);
    },
    deluser:function(id,callback){  
        return db.query('delete from user_tbl where user_id=?',[id],callback);
    },
    getuserbyId:function(id,callback){
        
        return db.query('select * from user_tbl where user_id=?',[id],callback);
    },
    edituser:function(data,callback){
        return db.query('update user_tbl set user_name=?,user_password=?,user_email=?,user_age=?,user_gender=?,user_mob=?,user_address=?,user_type=? where user_id=?',[data.user_name,data.user_password,data.user_email,data.user_age,data.user_gender,data.user_mob,data.user_address,data.user_type,data.user_id],callback); 
    }



};
module.exports=user;
