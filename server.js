var express = require("express");
var app = express();

app.use('/partials', express.static(__dirname + '/partials'));
app.use('/index.js', express.static(__dirname + '/index.js'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});


var port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log("Listening on " + port);
});