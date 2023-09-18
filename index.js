var path = require('path');
global.appRoot = path.resolve(__dirname);

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const middleware = [
	bodyParser.urlencoded({ extended: false }),
	bodyParser.json(),
];

app.use(middleware);

app.get('/', function(req, res) {
	res.send("Helloworld");
});

app.use("/fruit", require("./routes/fruit"));
app.use("/tree", require("./routes/tree"));
app.use("/flower", require("./routes/flower"));
app.use("/demon", require("./routes/demon"));
app.use("/coffee", require("./routes/coffee"));
app.use("/cat", require("./routes/cat"));
app.use("/dog", require("./routes/dog"));
app.use("/country", require("./routes/country"));

app.listen(9000);