var db = require('../dbconnection');
var dateFormat = require('dateformate');
var now = Date.now();
//const current_date //= dateFormat(now, "yyyy-mm-dd");
var dash = {
    getAllCustomer: function (callback) {

        return db.query('SELECT  COUNT(IF(u_Type="customer",1,null)) as simpleCustomer,COUNT(IF(u_Type = "member", 1, null)) as memberCount FROM admin', callback);
    },
    // MemeberCustomer: function (callback) {
    //     return db.query('SELECT count(*) from admin where u_type="member"', callback);
    // },

    ordersCust: function (item, callback) {
        console.log('update data model');
        return db.query('SELECT MONTH(bill_date) MONTH, COUNT(*) COUNT FROM order_bill_table WHERE YEAR(bill_date)=? GROUP BY MONTH(bill_date)', [item], callback);
    },
    trackStatus: function (callback) {
        console.log('update data model');
        return db.query('SELECT COUNT(IF(status="Delivered",1,null)) as Delivered ,COUNT(IF(status="packing",1,null)) as Packing, COUNT(IF(status="On The Way",1,null))as On_The_Way from tracking_table', callback);
    },
    topSellingProducts: function (callback) {
        return db.query("SELECT p.pro_name,SUM(od.qty) AS 'total',fk_pro_id FROM order_detalis_table od,order_bill_table o,product_table p WHERE od.fk_order_id=o.order_id and p.pro_id=od.fk_pro_id GROUP BY fk_pro_id ORDER BY (total) DESC LIMIT 8", callback);
    },
    topSellingProductHomePage: function (callback) {
        return db.query("SELECT p.pro_img,p.pro_price,p.pro_name,SUM(od.qty) AS 'total',fk_pro_id FROM order_detalis_table od,order_bill_table o,product_table p WHERE od.fk_order_id=o.order_id and p.pro_id=od.fk_pro_id GROUP BY fk_pro_id ORDER BY (total) DESC LIMIT 8", callback);
    },
    TotalCustomersCount: function (callback) {
        return db.query("SELECT COUNT(*) as 'Total_Customers'  FROM admin", callback);
    },
    FeedbacksCounts: function (callback) {
        return db.query("SELECT COUNT(*) as 'Feedbacks'  FROM feedback_table", callback);
    },
    TodaysOrderCount: function (callback) {
        console.log(current_date);
        return db.query("SELECT COUNT(*) as 'Today_Orders'  FROM order_bill_table WHERE bill_date=?", [current_date], callback);
    },
    TotalCashOnHand: function (callback) {
        console.log(current_date);
        return db.query("SELECT SUM(o.order_amount) as 'total' FROM order_tbl o,track_tbl t,delivery_tbl d WHERE o.order_id=d.order_id_fk and d.del_id=t.delivery_id_fk and d.del_date=? and t.status='Delivered' and o.payment_type='cash'", [current_date], callback);
    },
    DeliveryBoyTodaysCash: function (u_EmailId, callback) {
        // return db.query("SELECT a.u_Name,SUM(o.order_amt) as 'total' FROM order_bill_table o,tracking_table t,deliver_detalis_table d,admin a WHERE o.order_id=d.fk_order_id and d.detail_id=t.fk_detail_id and d.date=? and t.status='Delivered' and a.u_EmailId=?", [current_date, u_EmailId], callback);
        return db.query("SELECT SUM(o.order_amount) as 'total' FROM order_tbl o,track_tbl t,delivery_tbl d WHERE o.order_id=d.order_id_fk and d.del_id=t.delivery_id_fk and d.del_date=? and t.status='Delivered' and d.fk_user_id=?", [current_date, u_EmailId], callback)
    },
    onViewMoreInfo: function (order_id, callback) {
        console.log(order_id);
        return db.query('select a.user_name,d.del_id,d.user_id_fk as DelID,t.*,p.product_id,p.product_name,p.product_price,o.user_id_fk as UserName,o.order_date,o.order_amount,o.order_id,o.payment_type,od.* from track_tbl t,product_tbl p,delivery_tbl d,order_tbl o,order_detail od,user_tbl a where o.order_id=od.order_id_fk and o.order_id=d.order_id_fk and p.product_id=od.product_id_fk and d.del_id=t.delivery_id_fk and a.user_id=o.user_id_fk and o.order_id=?', [order_id], callback);
    },
}

module.exports = dash;