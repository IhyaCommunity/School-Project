var nav = document.getElementById('top-nav');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.classList.add('show-color');
    }

    else {
        nav.classList.remove('show-color');
        nav.style.transition = '.5s';
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
    window.scroll({ top: 1550, left: 0, behavior: 'smooth' });
}
document.getElementById('contact').onclick = function () {
    window.scroll({ top: 1950, left: 0, behavior: 'smooth' });
}
