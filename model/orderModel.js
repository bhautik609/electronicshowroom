var db=require('../dbconnection');
var order={
    getAllorder:function(callback){
        return db.query(' select *  from  order_tbl',callback);
    }
};
module.exports=order;
