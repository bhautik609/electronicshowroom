var db=require('../dbconnection');
var emp={
    getAllemp:function(callback){
        return db.query(' select *  from  emp_tbl',callback);
    }
};
module.exports=emp;
