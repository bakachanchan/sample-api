const express = require('express');
const router = express.Router();
const dataController = require("../controllers/data");

const dataType = "fruit";

router.get('/', function(req, res) {
	let data = dataController.getAllData(dataType);
	setTimeout(() => {
	  res.json(data);
	}, Math.floor(Math.random() * 10000));
	//res.json(data);
});

router.post('/', function(req, res) {
	let command = req.body.command;
	let data = req.body.data;

  let msg = dataController.doCommand(command, dataType, data);
  res.send(msg);
});

router.post('/upload', function(req, res) {
	let command = req.body.command;
	let data = req.body.data;

	let msg = dataController.doUpload(command, dataType, data);
	res.send(msg);
});

module.exports = router
