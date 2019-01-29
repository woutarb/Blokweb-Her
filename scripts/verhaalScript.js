/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var overlay = document.getElementsByTagName('ul')[0];
var mobileStory = document.querySelectorAll('img')[2];
var tabletStory = document.querySelectorAll('img')[3];
var desktopStory = document.querySelectorAll('img')[4];
var mobileMenu = document.getElementsByTagName('img')[1];
var gifArrayMobile = ['./images/hamburg.gif', './images/hamburg-reverse.gif'];

var imgArrayMobile = ['./images/mobiel2.png', './images/mobiel3.png', './images/mobiel4.png'];
var imgArrayTablet = ['./images/tablet2.png', './images/tablet3.png', './images/tablet4.png'];
var imgArrayDesktop = ['./images/desktop2.png', './images/desktop3.png', './images/desktop4.png'];


function verwerk() {
    switch (mobileStory.getAttribute('src')) {
        case 'images/mobiel1.png':
            mobileStory.setAttribute('src', imgArrayMobile[0]);
            mobileStory.addEventListener('click', verwerk);
            break;
        case './images/mobiel2.png':
            mobileStory.setAttribute('src', imgArrayMobile[1]);
            mobileStory.addEventListener('click', verwerk);
            break;
        case './images/mobiel3.png':
            mobileStory.setAttribute('src', imgArrayMobile[2]);
            mobileStory.addEventListener('click', verwerk);
            break;
        default:
            break;
    }
    switch (tabletStory.getAttribute('src')) {
        case 'images/tablet1.png':
            tabletStory.setAttribute('src', imgArrayTablet[0]);
            break;
        case './images/tablet2.png':
            tabletStory.setAttribute('src', imgArrayTablet[1]);
            break;
        case './images/tablet3.png':
            tabletStory.setAttribute('src', imgArrayTablet[2]);
            break;
    }
    switch (desktopStory.getAttribute('src')) {
        case 'images/desktop1.png':
            desktopStory.setAttribute('src', imgArrayDesktop[0]);
            break;
        case './images/desktop2.png':
            desktopStory.setAttribute('src', imgArrayDesktop[1]);
            break;
        case './images/desktop3.png':
            desktopStory.setAttribute('src', imgArrayDesktop[2]);
            break;
    }
}


function hamburgFunction() {
    switch (mobileMenu.getAttribute('src')) {
        case 'images/hamburger.png':
            mobileMenu.setAttribute('src', gifArrayMobile[0]);
            mobileMenu.addEventListener('click', hamburgFunction);

            overlay.setAttribute('id', 'opened');
            break;
        case './images/hamburg.gif':
            mobileMenu.setAttribute('src', gifArrayMobile[1]);
            mobileMenu.addEventListener('click', hamburgFunction);
            if (overlay.getAttribute('id') == 'opened') {
                overlay.setAttribute('id', 'closed');

            } else {
                overlay.setAttribute('id', 'opened');
            }
            break;
        case './images/hamburg-reverse.gif':
            mobileMenu.setAttribute('src', gifArrayMobile[0]);
            mobileMenu.addEventListener('click', hamburgFunction);
            overlay.setAttribute('id', 'closed');
            break;
        default:
            break;
    }
}

mobileMenu.addEventListener('click', hamburgFunction);
mobileStory.addEventListener('click', verwerk);
tabletStory.addEventListener('click', verwerk);
desktopStory.addEventListener('click', verwerk);
