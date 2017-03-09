'use strict';

//WAYPOINTS
var waypoint1 = new Waypoint({
	element: document.getElementById('technologies'),
	handler: function() {
		console.log('hej');
	}
})

document.addEventListener('DOMContentLoaded', ()=> 
	{ console.log('ready2');
});


//SCROLL
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	let header = document.getElementById("header");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
    }
}
