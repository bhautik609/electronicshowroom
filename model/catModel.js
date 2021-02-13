var db=require('../dbconnection');
var cat={
    getAllCat:function(callback){
        return db.query(' select *  from cat_tbl',callback);
    },
    addCat:function(data,callback){

        return db.query('insert into cat_tbl values(?,?)',[null,data.cat_name],callback);
    },
    delcat:function(id,callback){
        return db.query('delete from cat_tbl where cat_id=?',[id],callback);
    },
    getCatById:function(id,callback){
        //console.log(id);
        return db.query('select * from cat_tbl where cat_id=?',[id],callback);

    },
    editCat:function(data,callback){
        return db.query('update cat_tbl set cat_name=?  where cat_id=?',[data.cat_name,data.cat_id],callback); 
    }
};
module.exports=cat;
