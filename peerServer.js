var PeerServer = require('peer').PeerServer;
var server = new PeerServer({ port: 9000 });

console.log("P2P broker started.");
