var db=require('../dbconnection');
var orderdetail={
    getAllorderdetail:function(callback){
        return db.query(' select *  from  order_detail',callback);
    }
};
module.exports=orderdetail;
