var db=require('../dbconnection');
var user={
    getAlluser:function(callback){
        return db.query(' select *  from  user_tbl',callback);
    },
    adduser:function(data,filename,callback){
        console.log(data);
        return db.query('insert into user_tbl values(?,?,?,?,?,?,?,?,?,?)',[null,data.user_password,data.user_name,data.user_email,data.user_age,data.user_gender,data.user_mob,data.user_address,data.user_type,filename],callback);
    },
    deluser:function(id,callback){  
        return db.query('delete from user_tbl where user_id=?',[id],callback);
    },
    getuserbyId:function(id,callback){
        
        return db.query('select * from user_tbl where user_id=?',[id],callback);
    },
    //edituser:function(data,callback){
       // return db.query('update user_tbl set user_name=?,user_password=?,user_email=?,user_age=?,user_gender=?,user_mob=?,user_address=?,user_type=? where user_id=?',[data.user_name,data.user_password,data.user_email,data.user_age,data.user_gender,data.user_mob,data.user_address,data.user_type,data.user_id],callback); 
    //}
    edituser:function(user_id,data,filename,callback){
        console.log(data);
        console.log(filename);
        return db.query('update user_tbl set user_name=?,user_password=?,user_email=?,user_age=?,user_gender=?,user_mob=?,user_address=?,user_type=?,user_img=? where user_id=?',[data.user_name,data.user_password,data.user_email,data.user_age,data.user_gender,data.user_mob,data.user_address,data.user_type,filename,user_id],callback); 
    },
   // editproduct: function (product_id,data,filename, callback) {
       // console.log(data);
        //console.log(filename);
        //return db.query('update product_tbl set product_name=?,product_color=?,product_mfd=?,product_price=?,product_warr=?,product_garr=?,product_desc=?,product_img1=?,cat_id_fk=? where product_id=?', [data.product_name,data.product_color,data.product_mfd,data.product_price,data.product_warr,data.product_garr,data.product_desc,filename,data.cat_id_fk,product_id], callback);
    //},
    updateShippingDetail: function (user_id, data, callback) {
        return db.query('update user_tbl set user_address=? where  user_id=?', [data.u_Address, user_id], callback);
    },
    getuserByEmail: function (u_EmailId, callback) {
        return db.query("select * from user_tbl where user_email=?", [u_EmailId], callback);
    },
    deleteAll: function (item, callback) {
        return db.query("delete from user_tbl where user_id in (?)", [item], callback);
    },
    getAllUsersAccordingtoType: function (Type, callback) {
        return db.query("Select * from user_tbl WHERE user_type=?", [Type], callback)
    },


};
module.exports=user;
