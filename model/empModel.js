var db=require('../dbconnection');
var emp={
    getAllemp:function(callback){
        return db.query(' select *  from  emp_tbl',callback);
    },
    addemp:function(data,callback){

        return db.query('insert into emp_tbl values(?,?,?,?,?)',[null,data.emp_name,data.email,data.emp_salary,data.emp_join_date],callback);
    },
    delemp:function(id,callback){
        return db.query('delete from emp_tbl where emp_id=?',[id],callback);
    },
    getempbyId:function(id,callback){
        //console.log(id);
        return db.query('select * from emp_tbl where emp_id=?',[id],callback);
    },
    editemp:function(data,callback){
        return db.query('update emp_tbl set order_id_fk=?,emp_id_fk=?,del_date=?,del_status=? where del_id=?',[data.order_id_fk,data.emp_id_fk,data.del_date,data.del_status,data.del_id],callback); 
    }

};
module.exports=emp;
