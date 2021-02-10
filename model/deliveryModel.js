var db=require('../dbconnection');
var delivery={
    getAlldelivery:function(callback){
        return db.query(' select *  from  delivery_tbl',callback);
    },
    adddelivery:function(data,callback){

        return db.query('insert into delivery_tbl values(?,?,?,?,?)',[null,data.order_id_fk,data.emp_id_fk,data.del_date,data.del_status],callback);
    },
    deldelivery:function(id,callback){
        return db.query('delete from delivery_tbl where del_id=?',[id],callback);
    },
    getdeliverybyId:function(id,callback){
        //console.log(id);
        return db.query('select * from delivary_tbl where del_id=?',[id],callback);

    },
    editdelivary:function(data,callback){
        return db.query('update delivary_tbl set order_id_fk=?,emp_id_fk=?,del_date=?,del_status=? where del_id=?',[data.order_id_fk,data.emp_id_fk,data.del_date,data.del_status,data.del_id],callback); 
    }



};
module.exports=delivery;
