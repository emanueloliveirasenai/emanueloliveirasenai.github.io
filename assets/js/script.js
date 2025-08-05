document.addEventListener('DOMContentLoaded', function() {
    const btnHamburger = document.querySelector('.btn-hamburger');
    const menuLateral = document.querySelector('.menu-lateral');

    btnHamburger.addEventListener('click', function() {
        menuLateral.classList.toggle('aberto');
    });
});