var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.header__btn');

menu.classList.add('menu--hidden');
menu.setAttribute('style', 'display: none;');

var toggleMenuClasses = function () {
    if (menuBtn.display = 'block') {
        menuBtn.addEventListener('click', function () {
            $('.menu').slideToggle(2000);
            menuBtn.classList.toggle('header__btn--close')
        })
    }
}

toggleMenuClasses();
