var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catRouter=require('./routes/catRouter');
var deliveryRouter=require('./routes/deliveryRouter');
var empRouter=require('./routes/empRouter');
var orderdetailRouter=require('./routes/orderDetailRouter');
var orderRouter=require('./routes/orderRouter');
var productRouter=require('./routes/productRouter');
var userRouter=require('./routes/userRouter');
var loginRouter=require('./routes/loginRouter');
var feedback=require('./routes/feedbackRouter');
var shipping=require('./routes/shippindRouter');
var email=require('./routes/emailRouter');
var admin=require('./routes/adminRouter');
var serch=require('./routes/serchtextboxRouter');
var productbycatid=require('./routes/getproductbycatRouter');
var inserorderdetail=require('./routes/insertorderdetailRouter');
var myorder=require('./routes/myorderRouter');
var userOrderCheck_router=require('./routes/checkuserorderAssignRouter');
var ordernotassign=require('./routes/ordernotassignRouter');
var catdelete=require('./routes/catdeleteRouter');
var productdel=require('./routes/productdeleteAllRouter');
var userdel=require('./routes/userdeleteRouter');
var usertype=require('./routes/usertypeRouter');
var track=require('./routes/trcakRouter');
var orderass=require('./routes/getorderassignRouter');
var getordernot=require('./routes/getorderNotassignRouter');
var getallboy=require('./routes/getalldeliveryboy');
var addorderassign=require('./routes/addorderassignRouter');
var diliverydelall=require('./routes/deliverydelAllRouter');
var empdelall=require('./routes/deleteallEmpRouter');
var feedbackdel=require('./routes/feedbackdellAll.Router');
var orderdel=require('./routes/orderdelRouter');
var usercheck=require('./routes/usercheckstatuscheckRouter');
var delivery=require('./routes/deliveryboyLoginRouter');
var deliverydash=require('./routes/deliveryDashbordRouter');
var todaycash=require('./routes/todaycashRouter');
var deliveryinfo=require('./routes/deliveryinfoRouter');
var updatedeliverydate=require('./routes/updatedeliverydateRouter');
var getuserorderdetail=require('./routes/getcheckorderdetailRouter');
var myordernotassign=require('./routes/ordernotassignRouter');
var cancletarck=require('./routes/cancleTrackRouter');
var cancledelivery=require('./routes/cancledeliverydetailRouter');
var cancleorderdetail=require('./routes/cancleorderdetailRouter');
var cancleorder=require('./routes/cancleorderRouter');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cat',catRouter);
app.use('/delivery',deliveryRouter);
app.use('/emp',empRouter);
app.use('/orderdetail',orderdetailRouter);
app.use('/order',orderRouter);
app.use('/product',productRouter);
app.use('/_user',userRouter);
app.use('/login',loginRouter);
app.use('/feedback',feedback);
app.use('/shipping',shipping);
app.use('/email',email);
app.use('/admin',admin);
app.use('/serch',serch);
app.use('/catid',productbycatid);
app.use('/insertorder',inserorderdetail);
app.use('/myorder',myorder);
app.use('/UserOrderCheck',userOrderCheck_router);
app.use('/ordernotassign',ordernotassign);
app.use('/catdelete',catdelete);
app.use('/productdel',productdel);
app.use('/userdel',userdel);
app.use('/usertype',usertype);
app.use('/track',track);
app.use('/orderassign',orderass);
app.use('/orderNotAssigned',getordernot);
app.use('/getallboy',getallboy);
app.use('/AddAssignedOrder',addorderassign);
app.use('/deliverydel',diliverydelall);
app.use('/empdel',empdelall);
app.use('/feedbackdel',feedbackdel);
app.use('/orderdel',orderdel);
app.use('/UserOrderCheck',usercheck);
app.use('/deliveyBoylogin',delivery);
app.use('/deliverdashboard',deliverydash);
app.use('/TodaysCash',todaycash);
app.use('/deliver_info',deliveryinfo);
app.use('/updateDeliveyDate',updatedeliverydate);
app.use('/DetailsOrderCheck',getuserorderdetail);
app.use('/MyOrderNotAssign',myordernotassign);
app.use('/cancletrack',cancletarck);
app.use('/cancledelivery',cancledelivery);
app.use('/cancleorderdetail',cancleorderdetail);
app.use('/cancleorder',cancleorder);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
