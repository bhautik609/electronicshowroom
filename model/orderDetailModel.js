var db=require('../dbconnection');
var orderdetail={
    getAllorderdetail:function(callback){
        return db.query(' select  o.*,p.*  from  order_detail o,product_tbl p where p.product_id=o.product_id_fk',callback);
    },
    addorderdetail:function(data,callback){

        return db.query('insert into order_detail values(?,?,?,?)',[null,data.order_id_fk,data.product_id_fk,data.order_qty],callback);
    },
    delorderdetail:function(id,callback){
        return db.query('delete from order_detail where order_detail_id=?',[id],callback);
    },
    getorderdetailbyId:function(id,callback){
        //console.log(id);
        return db.query('select * from order_detail where order_detail_id=?',[id],callback);
    },
    editorderdetail:function(data,callback){
        return db.query('update order_detail set order_id_fk=?,product_id_fk=?,order_qty=? where order_detail_id=?',[data.order_id_fk,data.product_id_fk,data.order_qty,data.order_detail_id],callback); 
    }

};
module.exports=orderdetail;
