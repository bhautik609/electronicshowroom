var db=require('../dbconnection');
var user={
    getAlluser:function(callback){
        return db.query(' select *  from  user_tbl',callback);
    }
};
module.exports=user;
