var express = require('express');
var router = express.Router();
var multer = require("multer");

/* GET home page. */
router.post('/', function (req, res, next) {

	var storage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, './files')
		},
		filename: function (req, file, cb) {
			cb(null, Date.now() + '-' + file.originalname)
		}
	})

	var upload = multer({ storage: storage }).single('photo')

	upload(req, res, (err) => {
		if (err) {
			res.send("err:" + err);
		} else {
			//将文件信息赋值到req.body中，继续执行下一步
			req.body.photo = req.file.filename;
			console.log('req.file', req.file)
			res.send("文件上传成功" + req.file.filename);
		}
	})
});

module.exports = router;
