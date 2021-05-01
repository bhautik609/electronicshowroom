var db=require('../dbconnection');
var product={
    getAllproduct:function(callback){
        return db.query(' select p.*,c.*  from  product_tbl p ,cat_tbl c where c.cat_id=p.cat_id_fk',callback);
    },
    addproduct:function(data,filename,callback){
        console.log(data);
        return db.query('insert into product_tbl values(?,?,?,?,?,?,?,?,?,?)',[null,data.product_name,data.product_color,data.product_mfd,data.product_price,data.product_warr,data.product_garr,data.product_desc,filename,data.cat_id_fk],callback);
    },
    delproduct:function(id,callback){
        return db.query('delete from product_tbl where product_id=?',[id],callback);  
    },
     getproductbyId:function(product_id,callback){
       return db.query('select p.*,c.* from product_tbl p,cat_tbl c where c.cat_id=p.cat_id_fk and p.product_id=?',[product_id],callback);
        //return db.query('select * from product_tbl where product_id=?',[product_id],callback);
     },
   // editproduct:function(data,callback){
       // return db.query('update product_tbl set product_name=?,product_color=?,product_mfd=?,product_price=?,product_warr=?,product_garr=?,product_desc=?,product_img1=?,product_img2=?,product_img3=?,cat_id_fk=? where product_id=?',[data.product_name,data.product_color,data.product_mfd,data.product_price,data.product_warr,data.product_garr,data.product_desc,data.product_img1,data.product_img2,data.product_img3,data.cat_id_fk,data.product_id],callback); 
    //},
   // editproduct:function(filename,data,callback){
       // console.log(data);
       // return db.query('update product_tbl set product_name=?,product_color=?,product_mfd=?,product_price=?,product_warr=?,product_garr=?,product_desc=?,product_img1=?,cat_id_fk=? where product_id=?',[data.product_name,data.product_color,data.product_mfd,data.product_price,data.product_warr,data.product_garr,data.product_desc,filename,data.cat_id_fk,data.product_id],callback); 
    //},
    editproduct: function (product_id,data,filename, callback) {
        console.log(data);
        console.log(filename);
        return db.query('update product_tbl set product_name=?,product_color=?,product_mfd=?,product_price=?,product_warr=?,product_garr=?,product_desc=?,product_img1=?,cat_id_fk=? where product_id=?', [data.product_name,data.product_color,data.product_mfd,data.product_price,data.product_warr,data.product_garr,data.product_desc,filename,data.cat_id_fk,product_id], callback);
    },
    //getproductById:function(product_id,callback){
      //  return db.query('select p.*,c.* from product_tbl p,cat_tbl c where c.cat_id=p.cat_id_fk and p.product_id=?',[product_id],callback);
    //}
    //getProductById: function (pro_id, callback) {
        //return db.query('select c5.*,p5.* from category_table c5,product_table p5 where c5.cat_id=p5.fk_cat_id and p5.pro_id=?', [pro_id], callback);
    //},
    searchProduct: function (pro_name, callback) {
        // console.log(item.searchtext);
        db.query('select * from product_tbl where product_name like ?', ['%' + pro_name + '%'], callback);
    }, 
    getProductBycategory: function (fk_cat_id, callback) {
        return db.query('select c5.*,p5.* from cat_tbl c5,product_tbl p5 where c5.cat_id=p5.cat_id_fk and p5.cat_id_fk=?', [fk_cat_id], callback);
    },
    deleteAll: function (item, callback) {
        return db.query("delete from product_tbl where product_id in (?)", [item], callback);
    }


};
module.exports=product;
