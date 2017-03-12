'use strict';

const slogan = document.querySelector('.slogan');

function sizeUp() {
	slogan.classList.add('big');
}
function sizeDown() {
	slogan.classList.remove('big');
}

slogan.addEventListener ('transitionend', sizeDown);
setInterval (sizeUp, 3000);

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
