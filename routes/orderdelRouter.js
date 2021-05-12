var express = require('express');
var router = express.Router();
var prophoto = require('../model/orderModel');

router.post('/', function (req, res, next) {
    prophoto.deleteAll(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.get('/:order_id',function(req,res,next){
    prophoto.getMultiplebyOrderId(req.params.order_id,function(err,rows){
          if(err)
          {
              res.json(err);
          }
          else
          {
              res.json(rows);
          }
      });
    });


module.exports = router;