var db=require('../dbconnection');
var delivery={
    getAlldelivery:function(callback){
        return db.query(' select *  from  delivery_tbl',callback);
    }
};
module.exports=delivery;
