var db=require('../dbconnection');
//var dateFormat = require('dateformate');
//var now = new Date();
var dateFormat = require('dateformat');
var now = Date.now();
const current_date = dateFormat(now, "yyyy-mm-dd");
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
                 
                 //const d="11-05-2021";
                 const d=current_date;
                 console.log(d);
                 arr1.push([orders, del_Id,d]);
             }
             console.log(arr1);
         return db.query('insert into `delivery_tbl` (order_id_fk,user_id_fk,del_date) values ?', [arr1], callback);
     },
     deleteAll: function (item, callback) {
        return db.query("delete from delivery_tbl where del_id in (?)", [item], callback);
    },
    deliveryBoylogin: function (item, callback) {
        console.log(item);
        return db.query("select * from user_tbl where user_email=? and user_password=? and user_type='employee' ", [item.u_EmailId, item.u_password], callback);
    },
    getAllMemberOrderOfLoginD_Boy: function (fk_u_EmailId, callback) {
        console.log(fk_u_EmailId);
        return db.query("SELECT t.track_id,d.del_id,t.status,a.user_address,a.user_name,od.order_id,od.user_id_fk from user_tbl a,order_tbl od,delivery_tbl d,track_tbl t WHERE od.order_id=d.order_id_fk and t.status!='Delivered' and d.del_id=t.delivery_id_fk and a.user_id=od.user_id_fk and d.user_id_fk=? and a.user_type='1'", [fk_u_EmailId], callback);
    },
    updateTrack: function (track_id, item, callback) {
        console.log(item);
        console.log(track_id);
        return db.query('update track_tbl set status=? where track_id=?', [item.status, track_id], callback);
    },
    upadteDeliveryDate: function (item, callback) {
        console.log(item);
        return db.query("UPDATE delivery_tbl SET del_date=? WHERE del_id=?", [item.date, item.detail_id], callback);
    },
    pastDelievredOrder: function (fk_u_EmailId, callback) {
        // return db.query("SELECT * FROM deliver_detalis_table d, tracking_table t WHERE d.fk_u_EmailId = ? and t.status = 'delivered'  and d.detail_id = t.fk_detail_id", [fk_u_EmailId], callback);
        // return db.query("SELECT a.u_name,d.*,t.* FROM deliver_detalis_table d, tracking_table t,order_bill_table o,admin a WHERE d.fk_u_EmailId = ? and t.status = 'delivered'  and d.detail_id = t.fk_detail_id and o.order_id=d.fk_order_id and a.u_EmailId=o.fk_u_EmailId", [fk_u_EmailId], callback);

        return db.query("SELECT o.order_amount,a.user_name,d.*,t.* FROM delivery_tbl d, track_tbl t,order_tbl o,user_tbl a WHERE d.user_id_fk = ? and t.status = 'Delivered'  and d.del_id = t.delivery_id_fk and o.order_id=d.order_id_fk and a.user_id=o.user_id_fk", [fk_u_EmailId], callback);
    },
    CancelDBoy: function (fk_order_id, callback) {
        return db.query('delete from delivery_tbl where order_id_fk=?', [fk_order_id], callback);
    },


};
module.exports=delivery;
