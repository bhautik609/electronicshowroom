var db=require('../dbconnection');
var emp={
    deleteAll: function (item, callback) {
        return db.query("delete from emp_tbl where emp_id in (?)", [item], callback);
    },
    getAllemp:function(callback){
        return db.query(' select *  from  emp_tbl',callback);
    },
    addemp:function(data,callback){

        return db.query('insert into emp_tbl values(?,?,?,?,?)',[null,data.emp_name,data.emp_email,data.emp_salary,data.emp_join_date,data.emp_id],callback);
    },
    delemp:function(id,callback){
        return db.query('delete from emp_tbl where emp_id=?',[id],callback);
    },
    getempbyId:function(id,callback){
        //console.log(id);
        return db.query('select * from emp_tbl where emp_id=?',[id],callback);
    },
    editemp:function(data,callback){
        return db.query('update emp_tbl set emp_name=?,emp_email=?,emp_salary=?,emp_join_date=? where emp_id=?',[data.emp_name,data.emp_email,data.emp_salary,data.emp_join_date,data.emp_id],callback); 
    }

};
module.exports=emp;
