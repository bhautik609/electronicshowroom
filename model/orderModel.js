var db=require('../dbconnection');
var order={
    getAllorder:function(callback){
        return db.query(' select  o.*,u.*,p.* from  order_tbl o,user_tbl u,product_tbl p where u.user_id=o.user_id_fk and p.product_id=o.product_id_fk',callback);
    },
    addorder:function(data,callback){

        return db.query('insert into order_tbl values(?,?,?,?,?,?,?)',[null,data.order_date,data.order_amount,data.product_id_fk,data.user_id_fk,data.payment_type,data.payment_status],callback);
    },
    delorder:function(id,callback){
        return db.query('delete from order_tbl where order_id=?',[id],callback);
    },
    getorderbyId:function(id,callback){
        
        return db.query('select * from order_tbl where order_id=?',[id],callback);
    },
    editorder:function(data,callback){
        return db.query('update order_tbl set order_date=?,order_amount=?,product_id_fk=?,user_id_fk=?,payment_type=?,payment_status=? where order_id=?',[data.order_date,data.order_amount,data.product_id_fk,data.user_id_fk,data.payment_type,data.payment_status,data.order_id],callback); 
    }




};
module.exports=order;
