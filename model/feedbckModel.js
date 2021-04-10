var db=require('../dbconnection');
var feedback={
    getAllfeedback:function(callback){
        return db.query('select  u.*,f.* from user_tbl u,feedback_tbl f where u.user_email=f.user_email_fk' ,callback);
    },
    delfeedback:function(id,callback){
        return db.query('delete from feedback_tbl where feed_id=?',[id],callback);
    },
}
module.exports=feedback;