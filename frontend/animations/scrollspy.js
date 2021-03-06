/* work in progress */

(function() {
    'use strict';

    let section = document.querySelectorAll(".section");
    let sections = {};
    let i = 0;

    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for(i in sections) {
            if(sections[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', 'panel__nav panel--link panel--link-brighten');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'panel__nav panel--link panel--link-brighten active');

                console.log('tutej okej');
            }
        }
    };
})();