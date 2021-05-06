var db=require('../dbconnection');
var dateFormat = require('dateformate');
var now = new Date();
var delivery={
    getAlldelivery:function(callback){
        return db.query('select d.*,u.*,o.* from delivery_tbl d,user_tbl u,order_tbl o where u.user_id=d.user_id_fk and o.order_id=d.order_id_fk',callback);
    },
    //adddelivery:function(data,callback){

        //return db.query('insert into delivery_tbl values(?,?,?,?,?)',[null,data.order_id_fk,data.del_date,data.del_status,data.emp_id_fk],callback);
    //},
    deldelivery:function(id,callback){
        return db.query('delete from delivery_tbl where del_id=?',[id],callback);
    },
    getdeliverybyId:function(id,callback){
        //console.log(id);
        return db.query('select * from delivery_tbl where del_id=?',[id],callback);

    },
    editdelivary:function(data,callback){
        return db.query('update delivery_tbl set order_id_fk=?,emp_id_fk=?,del_date=?,del_status=? where del_id=?',[data.order_id_fk,data.emp_id_fk,data.del_date,data.del_status,data.del_id],callback); 
    },
    getOrderStatus: function (fk_detail_id, callback) {
        return db.query('select * from delivery_tbl WHERE fk_detail_id=?', [fk_detail_id], callback);
    },
    getAllDBoyFromAdmin:function(callback)
    {
        return db.query('select * from user_tbl where user_type="employee"',callback);
    },

    getOrderAssigned: function (order_id, callback) {
        return db.query('SELECT * FROM delivery_tbl WHERE order_id_fk=?', [order_id], callback);
    },
    AddOrderAssigned: function (item, callback) {
         var arr1 = [];
         console.log("item",item);

         if (item != null)
             for (let i = 0; i < item.selectedOrderArr.length; i++) {
                 console.log("insidefor");
                 const orders = item.selectedOrderArr[i];
                 console.log(orders);
                 const del_Id = item.selectedDBoyId;
                 console.log(del_Id);
                 //const d = dateFormat(now,"yyyy-mm-dd");
                 
                 const d="11-05-2021";
                 console.log(d);
                 arr1.push([orders, del_Id,d]);
             }
             console.log(arr1);
         return db.query('insert into `delivery_tbl` (order_id_fk,user_id_fk,del_date) values ?', [arr1], callback);
     },
     deleteAll: function (item, callback) {
        return db.query("delete from delivery_tbl where del_id in (?)", [item], callback);
    }


};
module.exports=delivery;
