var db=require('../dbconnection');
var product={
    getAllproduct:function(callback){
        return db.query(' select p.*,c.*  from  product_tbl p ,cat_tbl c where c.cat_id=p.cat_id_fk',callback);
    },
    addproduct:function(data,filename,callback){
        console.log(data);
        return db.query('insert into product_tbl values(?,?,?,?,?,?,?,?,?,?,?,?)',[null,data.product_name,data.product_color,data.product_mfd,data.product_price,data.product_warr,data.product_garr,data.product_desc,filename,filename,data.product_img3,data.cat_id_fk],callback);
    },
    delproduct:function(id,callback){
        return db.query('delete from product_tbl where product_id=?',[id],callback);  
    },
    // getproductbyId:function(id,callback){
        
    //     return db.query('select * from product_tbl where product_id=?',[id],callback);
    // },
    editproduct:function(data,callback){
        return db.query('update product_tbl set product_name=?,product_color=?,product_mfd=?,product_price=?,product_warr=?,product_garr=?,product_desc=?,product_img1=?,product_img2=?,product_img3=?,cat_id_fk=? where product_id=?',[data.product_name,data.product_color,data.product_mfd,data.product_price,data.product_warr,data.product_garr,data.product_desc,data.product_img1,data.product_img2,data.product_img3,data.cat_id_fk,data.product_id],callback); 
    },
    getproductById:function(data,callback){
        return db.query('select p.*,c.* from product_tbl p,cat_tbl c where c.cat_id=p.cat_id_fk and p.product_id=?',[id],callback);
    } 



};
module.exports=product;
