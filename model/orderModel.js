var db=require('../dbconnection');
var order={
    getAllorder:function(callback){
        return db.query(' select  o.*,u.* from  order_tbl o,user_tbl u where u.user_id=o.user_id_fk',callback);
    },
    addorder:function(data,callback){

        return db.query('insert into order_tbl values(?,?,?,?,?,?)',[null,data.order_date,data.order_amount,data.user_id_fk,data.payment_type,data.payment_status],callback);
    },
    delorder:function(id,callback){
        return db.query('delete from order_tbl where order_id=?',[id],callback);
    },
    getorderbyId:function(id,callback){
        
        return db.query('select * from order_tbl where order_id=?',[id],callback);
    },
    editorder:function(data,callback){
        return db.query('update order_tbl set order_date=?,order_amount=?,product_id_fk=?,user_id_fk=?,payment_type=?,payment_status=? where order_id=?',[data.order_date,data.order_amount,data.product_id_fk,data.user_id_fk,data.payment_type,data.payment_status,data.order_id],callback); 
    },
    getMyOrdersById: function (user_id_fk, callback) {
        return db.query('SELECT * from order_tbl WHERE user_id_fk=?', [user_id_fk], callback);
    },
    getOrderDetailsByOrderIdNotAssign: function (order_id, callback) {
        return db.query('select p.product_name,p.product_img1,p.product_price,o.*,od.* from product_tbl p,order_tbl o,order_detail od where o.order_id=od.order_id_fk  and p.product_id=od.product_id_fk and o.order_id=?', [order_id], callback);
    },
    getMultiplebyOrderId: function (order_id, callback) {
        return db.query('select d.*,t .*,p.product_name,p.product_img1,o.*,od.*,d.user_id_fk as DelID from track_tbl t,product_tbl p,delivery_tbl d,order_tbl o,order_detail od where o.order_id=od.order_id_fk and o.order_id=d.order_id_fk and p.product_id=od.product_id_fk and d.delivery_id=t.delivery_id_fk and o.order_id=?', [order_id], callback);
    },
    getOrderAssigned: function (callback) {
        return db.query('SELECT a.user_name as DeliveryBoy_Name,o.*,d.del_id,d.user_id_fk as DeliveryBoyId,d.order_id_fk,d.del_date from user_tbl a,delivery_tbl d,order_tbl o where a.user_type="employee" and o.order_id=d.order_id_fk and a.user_id=d.user_id_fk', callback)
    },
    getOrdernotAssigned: function (callback) {
        // return db.query('SELECT o.* FROM order_bill_table o WHERE o.order_id NOT IN ( SELECT d.fk_order_id FROM deliver_detalis_table d )', callback);
        return db.query('SELECT a.user_type,o.* FROM order_tbl o ,user_tbl a WHERE o.order_id NOT IN ( SELECT d.order_id_fk FROM delivery_tbl d ) and a.user_type="1" and a.user_id=o.user_id_fk', callback);
    },
    deleteAll: function (item, callback) {
        //console.log(item);
        return db.query("delete from order_tbl where order_id in (?)", [item], callback);
    },
    




};
module.exports=order;
