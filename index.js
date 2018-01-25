var express = require('express');

var app = express();

app.get('/', function (req, res) {
    console.log("My express app is working!!!");
    res.end("Hi There");
});

app.get('/something', function (req, res) {
    res.write("The url is: " + req.url);
    res.end(" and this is the something page.");
});

app.listen(3000, function () {
    console.log('app listening on port 3000');
});
