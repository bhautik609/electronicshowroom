var db=require('../dbconnection');
var feedback={
    getAllfeedback:function(callback){
        return db.query('select  u.*,f.* from user_tbl u,feedback_tbl f where u.user_email=f.user_email_fk' ,callback);
    },
    delfeedback:function(id,callback){
        return db.query('delete from feedback_tbl where feed_id=?',[id],callback);
    },
    //AddFeedback: function (item, callback) {
       // return db.query("insert into feedback_table (fk_u_EmailId,feedback_msg,feedback_date) values (?,?,?)", [item.fk_u_EmailId, item.feedback_msg,item.feedback_date], callback);

    //},
    AddFeedback:function(item,callback){
        console.log(item);
        return db.query('insert into feedback_tbl values(?,?,?,?)',[null,item.fk_u_EmailId,item.feedback_msg,item.feedback_date],callback);
    },
    deleteAll: function (item, callback) {
        return db.query("delete from feedback_tbl where feed_id in (?)", [item], callback);
    }
}
module.exports=feedback;