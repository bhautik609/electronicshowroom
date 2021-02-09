var db=require('../dbconnection');
var product={
    getAllproduct:function(callback){
        return db.query(' select *  from  product_tbl',callback);
    }
};
module.exports=product;
