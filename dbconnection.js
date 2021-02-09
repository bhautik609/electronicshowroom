var mysql=require('mysql');
var connection=mysql.createPool({

    user:'root',
    password:'',
    database:'electronic',
    host:'localhost'

});
module.exports=connection;