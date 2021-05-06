var express = require('express');
var router = express.Router();
var track = require('../model/trackModel');

router.get('/', function (req, res, next) {
    track.getAllTrack(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

    router.get('/:track_id', function (req, res, next) {
        track.getById(req.params.track_id,function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    });

router.delete('/:track_id',function(req,res,next){
    track.deleteTrack(req.params.track_id,function(err,rows){
        if(err) {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});


router.post('/',function (req, res, next) {    
    track.addTrack(req.body,function (err, rows) {
    
        if (err) {
            res.json(err);
        }
        else {
            console.log("rows");
            res.json(rows);
        }
    });
});

router.put('/:track_id',function (req, res, next) {
    track.updateTrack(req.params.track_id,req.body,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


module.exports=router;