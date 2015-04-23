var PeerServer = require('peer').PeerServer;
var server = new PeerServer({ port: 9000 });

console.log("P2P broker started.");


var express = require('express');
var app = express();
var server = require('http').createServer(app);
var router = express.Router();

var serveStatic = require('serve-static');

app.use(serveStatic(__dirname + '/public'));

server.listen(process.env.PORT);