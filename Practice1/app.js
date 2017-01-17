var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);

var serve = http.createServer(app); 
var io = require('socket.io')(serve);

//var port = process.env.port || 1337;
serve.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});


io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
