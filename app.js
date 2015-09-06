var express = require('express');
var app = express();

app.use(express.static('static', {
    index: false
}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index/index.html')
});

var server = app.listen(11111, function () {
  console.log('Started');
});
