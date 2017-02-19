'use strict';

var waypoint1 = new Waypoint({
	element: document.getElementById('js-waypoint1'),
	handler: function() {
		console.log('hej');
	}
})

document.addEventListener('DOMContentLoaded', ()=> 
	{ console.log('ready2');
});