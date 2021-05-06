var db = require('../dbconnection'); //reference of dbconnection.js
var UserOrderStatus = {
    getOrderAssigned: function (order_id, callback) {
        return db.query('SELECT * FROM delivery_tbl WHERE order_id_fk=?', [order_id], callback);
    },
    getOrderAssignedDetails: function (order_id, callback) {
        return db.query('SELECT t.*,d.del_date,d.del_id,d.user_id_fk as DelIveryBoyId,o.* FROM order_tbl o,delivery_tbl d,track_tbl t WHERE o.order_id=d.order_id_fk and d.del_id=t.delivery_id_fk and o.order_id=?', [order_id], callback)
    }
};
module.exports = UserOrderStatus;