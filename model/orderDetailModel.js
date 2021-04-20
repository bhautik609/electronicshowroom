var db=require('../dbconnection');
var orderdetail={
    getAllorderdetail:function(callback){
        return db.query(' select  o.*,p.*,o1.*  from  order_detail o,product_tbl p, order_tbl o1 where p.product_id=o.product_id_fk and o1.order_id=o.order_id_fk',callback);
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
    },
    insertOrderDetail: function (item, callback) {
        const arr1 = [];
        console.log('inside model delivery detAILS');
        console.log(item);
        for (let j = 0; j < item.cartItems.length; j++) {
            //var od = null;
            var order_id_fk = item.order_id_fk;
            var product_id_fk = item.cartItems[j]. Product.product_id;
            var order_qty = item.cartItems[j].Quantuty;
            arr1.push([order_id_fk, product_id_fk, order_qty]);
        }
        console.log(arr1);
        return db.query("insert into `order_detail` (`order_id_fk`,`product_id_fk`,`order_qty`) values ?", [arr1], callback);
        //return db.query('insert into order_detail values(?,?,?)', [arr1], callback);
    },

};
module.exports=orderdetail;
