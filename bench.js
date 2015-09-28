"use strict";
var WebSocket = require('ws');

(function () {
	let ws = new WebSocket('wss://localhost:8080/');

	ws.on('open', function open() {
		ws.send('something');
	});

	ws.on('error', function (err) {
		console.error(err);
	});

	ws.on('message', function (data, flags) {
		// flags.binary will be set if a binary data is received.
		// flags.masked will be set if the data was masked.
		console.log(data);
	});

})();
