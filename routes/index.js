var express = require('express');
var router = express.Router();
var DevicesDao = require('../dao/DevicesDao');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
router.get('/devicesById', function (req, res, next) {
  console.log(req);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  DevicesDao(req, res);
});
router.post('/upDateDeviceById', function (req, res, next) {
  res.json({
    msg: 'success'
  })
});
router.post('/check', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.json({
    code: 200,
    msg: 'success',
    data: req.body
  })
});


module.exports = router;