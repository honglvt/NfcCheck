var express = require('express');
var router = express.Router();
var DevicesDao = require('../dao/DevicesDao');
var UpdateDao = require('../dao/UpdateDao');

var path = require('path');

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
  console.log(req.body);
  UpdateDao(req, res);
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

// router.get("/deviceDetail", (req, res, next) => {
//   console.log(path.join(__dirname, '../pages/index.html'));
//   res.sendfile(path.join(__dirname, '../pages/index.html'))
// })


module.exports = router;