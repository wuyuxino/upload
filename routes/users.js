var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function (req, res, next) {
	req.params
	console.log('123', req.params)

	res.send('请求成功')
});

module.exports = router;
