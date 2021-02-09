var db=require('../dbconnection');
var cat={
    getAllCat:function(callback){
        return db.query(' select *  from cat_tbl',callback);
    }
};
module.exports=cat;
