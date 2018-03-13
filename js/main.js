document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    const viewport = document.querySelector('.viewport');
    const header = document.querySelector('.header');
    const footerTab = document.querySelector('.footer__js-tab');
    const wallBtn = document.querySelector('.wall__btn');
    const navAbout = document.querySelector('.nav__item--1');
    const arrow = document.querySelector('.arrow');
    const navWork = document.querySelector('.nav__item--2');
    const navContact = document.querySelector('.nav__item--3');
    const main = document.querySelector(".main");
    const wall = document.querySelector(".wall");
    const wallInner = document.querySelector(".wall__inner");

    function menuActions(e) {
        menu.classList.toggle('open');
        nav.classList.toggle('open');
        viewport.classList.toggle('blacken');
        e.stopPropagation();
    }

    if (screen.width >= 1024 && screen.height >= 768) {
        wall.addEventListener("mousemove", function (e) {
            let x = -(e.pageX) / 25;
            let y = -(e.pageY) / 25;
            if (main.getBoundingClientRect().top > 0) {
                this.style.backgroundPosition = x + "px " + y + "px";
            }
        });
    }

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 0) {
            wallInner.style.opacity = 1 - window.pageYOffset / 0.75 / main.offsetTop;
        }
        else {
            wallInner.style.opacity = 1;
        }
    });

    menu.addEventListener('click', menuActions);
    viewport.addEventListener('click', menuActions);
    header.addEventListener('click', function () {
        menu.classList.remove('open');
        nav.classList.remove('open');
        viewport.classList.remove('blacken');
    });


    footerTab.addEventListener('click', function () {
        document.querySelector('.footer__mid').classList.toggle('operino');
        document.querySelector('.footer__front').classList.toggle('operino');
        document.querySelector('.footer__tab').classList.toggle('operino');
        Array.from(document.getElementsByClassName('social-icons')).forEach(function (icon) {
            icon.classList.toggle('operino');
        });
    });

    wallBtn.addEventListener('click', function () {
        scrollAnimator(70, ".about", 800);
    });

    navAbout.addEventListener('click', function (e) {
        scrollAnimator(70, ".about", 800);
        menuActions(e);
    });

    arrow.addEventListener('click', function () {
        scrollAnimator(0, ".work", 800);
    });

    navWork.addEventListener('click', function (e) {
        scrollAnimator(0, ".work", 800);
        menuActions(e);
    });

    navContact.addEventListener('click', function (e) {
        scrollAnimator(0, ".contact", 800);
        menuActions(e);
    });


    function scrollAnimator(slack, element, duration) {
        var startingY = window.pageYOffset;
        var elementY = window.pageYOffset + document.querySelector(element).getBoundingClientRect().top;

        // If element is close to page's bottom then window will scroll only to some position above the element.
        var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
        var diff = targetY - startingY;

        // Easing function: easeInOutCubic
        var easing = function (t) {
            return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };
        var start;

        if (!diff) return;

        // Bootstrap our animation - it will get called right before next frame shall be rendered.
        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;

            // Elapsed miliseconds since start of scrolling.
            var time = timestamp - start;

            // Get percent of completion in range [0, 1].
            var percent = Math.min(time / duration, 1);

            // Apply the easing.
            // It can cause bad-looking slow frames in browser performance tool, so be careful.
            percent = easing(percent);

            window.scrollTo(0, startingY + (diff - slack) * percent);

            // Proceed with animation as long as we wanted it to.
            if (time < duration) {
                window.requestAnimationFrame(step);
            }
        })
    }

    footerTab.addEventListener('click', function(){
        document.getElementById("lulz").play();
        document.querySelector('.contact').style.backgroundImage = 'url(img/rr.gif)';
        document.querySelector('.lul1').classList.toggle('operino');
        document.querySelector('.lul2').classList.toggle('operino');
    });

});

