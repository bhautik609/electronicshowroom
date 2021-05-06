var db=require('../dbconnection');

var trak={

    getAllTrack:function(callback){
        return db.query( 'select t.*,d.* from track_tbl t,delivery_tbl d where t.delivery_id_fk=d.del_id ' ,callback);
    },
    deleteTrack:function(track_id,callback){
        return db.query('delete from track_tbl where track_id=? ',[track_id],callback);
    },
    getById:function(track_id,callback){
        return db.query('select * from track_tbl where track_id=?',[track_id],callback);
    },
    addTrack:function(item,callback){
        console.log(item);
        return db.query('INSERT INTO track_tbl (status,delivery_id_fk) values (?,?)',[item.status,item.fk_detail_id],callback);
    },
    updateTrack:function(track_id,item,callback){
        return db.query('update track_tbl set status=?,delivery_id_fk=? where track_id=?',[item.status,item.fk_detail_id,track_id],callback);
    },
    deleteAll: function (item, callback) {
        //console.log(item);
        return db.query("delete from track_tbl where track_id in (?)", [item], callback);
    },
    
};

module.exports=trak;