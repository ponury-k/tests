var c = 0;
var WebSocketServer = require('ws').Server
	, wss = new WebSocketServer({port : 8080});
wss.on();
wss.on('connection', function (ws) {
	ws.on('message', function (message, flag) {
		console.log(flag);
	});
	console.log("count: " + wss.clients.length);
});
console.log("Server started");

var ws = require('ws');
ws.WebSocket.