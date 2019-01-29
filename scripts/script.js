/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var mobileMenu = document.getElementsByTagName('img')[1];
var gifArrayMobile = ['./images/hamburg.gif', './images/hamburg-reverse.gif'];
var toHide = document.getElementById('visible');
var hideButton = document.getElementsByTagName('button')[0];
var overlay = document.getElementsByTagName('ul')[0];

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

function hide() {
    toHide.setAttribute('id', 'hidden');
}

mobileMenu.addEventListener('click', hamburgFunction);
hideButton.addEventListener('click', hide);
