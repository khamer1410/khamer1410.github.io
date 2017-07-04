'use strict';

//COPY E-MAIL ADRESS
    const emailBtn = document.getElementById('email');
    const emailHolder = document.getElementById('mailholder');

    function copyEmail() {
        emailHolder.select();
        document.execCommand('copy');
    }

    emailBtn.addEventListener ('click', copyEmail);

//GALLERY
    const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
        panels.forEach((el) => {
            if (el != this) {
                el.classList.remove('open');
                el.classList.remove('open-active');
            }
        });
        this.classList.toggle('open');
        this.classList.toggle('open-active');
    }

    panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
    
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

    let LinkRegExp = /^#/;

    $(document).on('click', 'a', function (event) {
        const clickedLink = event.currentTarget;
        if ( LinkRegExp.test(clickedLink.getAttribute('href'))) {
            event.preventDefault();
            $('body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 800);
        }
    });


//LOADER
    window.addEventListener('load', ()=> {
        hideLoader();
    });

    function hideLoader() {
        let loader = document.querySelector('.loader');
        loader.style.opacity = '0';
        loader.addEventListener('transitionend',()=> {
            loader.style.display = 'none';
        });
    }

// //WAYPOINTS - not used on page yet
// var waypoint1 = new Waypoint({
// 	element: document.getElementById('technologies'),
// 	handler: function() {
// 		console.log('hej');
// 	}
// })

