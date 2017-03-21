'use strict';

const slogan = document.querySelector('.slogan');
const emailBtn = document.getElementById('email');
const emailHolder = document.getElementById('mailholder');

function sizeUp() {
	slogan.classList.add('big');
}
function sizeDown() {
	slogan.classList.remove('big');
}
function copyEmail() {
	emailHolder.select();
	document.execCommand('copy');
}

slogan.addEventListener ('transitionend', sizeDown);
emailBtn.addEventListener ('click', copyEmail);
setInterval (sizeUp, 3000);


//SCROLL
window.onscroll = ()=> {scrollFunction()};

function scrollFunction() {
	let header = document.getElementById("header");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
    }
}


// //WAYPOINTS - not used on page yet
// var waypoint1 = new Waypoint({
// 	element: document.getElementById('technologies'),
// 	handler: function() {
// 		console.log('hej');
// 	}
// })

// document.addEventListener('DOMContentLoaded', ()=> 
// 	{ console.log('ready2');
// });


