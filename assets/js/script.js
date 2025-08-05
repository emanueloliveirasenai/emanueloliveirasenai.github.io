document.addEventListener('DOMContentLoaded', () => {
    const menuLateral = document.querySelector('.menu-lateral');
    const btnHamburger = document.querySelector('.btn-hamburger');
    const linksDoMenuMobile = document.querySelectorAll('.menu-lateral ul li a');
    const btnTopo = document.getElementById('btn-topo');

    if (btnHamburger && menuLateral) {
        btnHamburger.addEventListener('click', () => {
            menuLateral.classList.toggle('aberto');
        });
    }

    linksDoMenuMobile.forEach(link => {
        link.addEventListener('click', () => {
            menuLateral.classList.remove('aberto');
        });
    });

    function toggleBotaoTopo() {
        if (window.scrollY > 100) {
            btnTopo.classList.add('visivel');
        } else {
            btnTopo.classList.remove('visivel');
        }
    }

    window.addEventListener('scroll', toggleBotaoTopo);
});