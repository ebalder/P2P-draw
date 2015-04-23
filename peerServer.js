
var express = require('express');
var app = express();
var server = require('http').createServer(app);

var peerServer = require('peer').ExpressPeerServer;


var router = express.Router();

var serveStatic = require('serve-static');

app.use(serveStatic(__dirname + '/public'));

app.use('/peerServer', peerServer(server, {}));


server.listen(process.env.PORT || 9000);

console.log("P2P broker started.", process.env.PORT);