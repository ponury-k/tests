"use strict";
var WebSocket = require('ws');
var c = 0;
(function () {
	let ws = new WebSocket('ws://192.168.0.226:8080/');

	ws.on('open', function open() {
		for(let i = 0; i < 10000; i++) {
			ws.send('.');
		}
	});

	ws.on('error', function (err) {
		console.error(err);
	});

	ws.on('message', function (message, flag) {
		let response = '';
		if(message == 'ping') {
			response = 'pong';
		} else if(message == 'pong') {
			response = 'ping';
		} else response = message;

		c++;

	});

	setInterval(function() {
		console.log('Message count: ' + c);
		c = 0;
	}, 1000);

})();
