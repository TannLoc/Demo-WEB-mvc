const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Hiển thị Nav Bar trên Mobile
const viewNav = $('.list-icon-mobile');
const headerNavList = $('.header-nav__list.hide-on-mobile');

viewNav.onclick = function() {
    const isNavbarHidden = headerNavList.classList.contains('hide-on-mobile');
    if (isNavbarHidden) {
        headerNavList.classList.remove('hide-on-mobile');
    } else {
        headerNavList.classList.add('hide-on-mobile');
    }
};