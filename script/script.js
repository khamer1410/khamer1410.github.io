'use strict';

//COPY E-MAIL ADRESS
    const emailBtn = document.getElementById('email');
    const emailHolder = document.getElementById('mailholder');

    function copyEmail() {
        emailHolder.select();
        document.execCommand('copy');
    }

    function sendEmail(e) {
        const emailAdress = e.currentTarget.dataset.email;
        emailAdress 
        ? window.open(`mailto:${emailAdress}`)
        : copyEmail();
    }

    emailBtn.addEventListener ('click', sendEmail);

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
    window.onscroll = ()=> {toggleHeaderPosition()};

    function toggleHeaderPosition() {
        let header = document.getElementById("header");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            header.classList.add("header-fixed");
        } else {
            header.classList.remove("header-fixed");
        }
    }


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

