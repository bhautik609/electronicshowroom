var db=require('../dbconnection');
var product={
    getAllproduct:function(callback){
        return db.query(' select *  from  product_tbl',callback);
    },
    addproduct:function(data,callback){

        return db.query('insert into product_tbl values(?,?,?,?,?,?,?,?,?,?,?,?)',[null,data.product_name,data.product_color,data.product_mfd,data.product_price,data.product_warr,data.product_garr,data.product_dec,data.product_img1,product_img2,product_img3,cat_id_fk],callback);
    },
    delproduct:function(id,callback){
        return db.query('delete from product_tbl where product_id=?',[id],callback);  
    },
    getproductbyId:function(id,callback){
        
        return db.query('select * from product_tbl where product_id=?',[id],callback);
    },
    editproduct:function(data,callback){
        return db.query('update product_tbl set product_name=?,product_color=?,product_mfd=?,product_price=?,product_warr=?,product_garr=?,product_desc=?,product_img1=?,product_img2=?,product_img3=?,cat_id_fk=? where product_id=?',[null,data.product_name,data.product_color,data.product_mfd,data.product_price,data.product_warr,data.product_garr,data.product_dec,data.product_img1,product_img2,product_img3,cat_id_fk,data.product_id],callback); 
    }



};
module.exports=product;
