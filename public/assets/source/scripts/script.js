var nav = document.getElementById('top-nav');
var logo_img = document.getElementById('logo-img');


var logo = logo_img.style;
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    // Condition for add color on Navigation Bar
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.classList.add('show-color');
        logo_img.style.height = '60px';
        logo_img.style.width = '60px';
    }

    else {
        nav.classList.remove('show-color');
        nav.style.transition = '.5s';
        logo.height = '100px';
        logo.width = '100px';
        logo.transition = '.5s';
        logo.transition = '.5s';
    }


}
////////////////////////////////////////////////////////

document.getElementById('logo').onclick = function () {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}
document.getElementById('about').onclick = function () {
    window.scroll({ top: 600, left: 0, behavior: 'smooth' });
}
document.getElementById('cause').onclick = function () {
    window.scroll({ top: 1050, left: 0, behavior: 'smooth' });
}
document.getElementById('gallery').onclick = function () {
    window.scroll({ top: 2000, left: 0, behavior: 'smooth' });
}
document.getElementById('contact').onclick = function () {
    window.scroll({ top: 2900, left: 0, behavior: 'smooth' });
}
