const { json } = require('express');
var express = require('express');
var router = express.Router();
const sql = require("../dboperation");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//test connection
router.get('/testconnect', function(req, res, next) {
  sql.getdata();
  res.render('index', { title: 'Express' });
});


router.get("/getdata_withQuery", function (req, res, next) {
  sql.getdata_withQuery().then((result) => {
    res.json(result[0]);
  });
});

router.get("/routepoint", function (req, res, next) {
  sql.routepoint().then((result) => {
    res.json(result[0]);
  });
});

router.get("/entrypoint", function (req, res, next) {
  sql.entrypoint().then((result) => {
    res.json(result[0]);
  });
});

router.get("/exitpoint", function (req, res, next) {
  sql.exitpoint().then((result) => {
    res.json(result[0]);
  });
});

router.get("/distancenm", function (req, res, next) {
  sql.distancenm().then((result) => {
    res.json(result[0]);
  });
});


module.exports = router;
