"use strict";
var blessed = require('blessed');

// Create a screen object.
var screen = blessed.screen({
	smartCSR: true
});

screen.title = 'my window title';

// Create a box perfectly centered horizontally and vertically.
var box = blessed.log({
	top: '0',
	left: '0',
	width: '100%',
	height: '10%',
	tags: true,
	border: {
		type: 'line'
	},
	style: {
		fg: 'white',
		bg: 'black',
		border: {
			fg: '#f0f0f0'
		},
		hover: {
			bg: 'green'
		}
	},
	scrollbar : {
		bg : 'blue'
	}
});


// Append our box to the screen.
screen.append(box);

// Add a png icon to the box
var icon = blessed.image({
	parent: box,
	top: 0,
	left: 0,
	type: 'overlay',
	width: 'shrink',
	height: 'shrink',
	file: __dirname + '/my-program-icon.png',
	search: false
});

// If our box is clicked, change the content.
/*box.on('click', function(data) {
	box.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
	screen.render();
});*/

// If box is focused, handle `enter`/`return` and give us some more content.
box.key('enter', function(ch, key) {
	box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
	box.setLine(1, 'bar');
	box.insertLine(1, 'foo');
	screen.render();
});

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
	return process.exit(0);
});

// Focus our element.
box.focus();

// Render the screen.
screen.render();

setInterval(function() {
	box.log(Date());

}, 1000);