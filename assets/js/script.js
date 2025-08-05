document.addEventListener('DOMContentLoaded', () => {

    const menuLateral = document.querySelector('.menu-lateral');
    const btnHamburger = document.querySelector('.btn-hamburger');
    const linksDoMenu = document.querySelectorAll('.menu-lateral ul li a');
    const btnTopo = document.getElementById('btn-topo');
    const secaoEntrada = document.querySelector('#entrada');
    const todasAsSecoes = document.querySelectorAll('main section');

    if (btnHamburger && menuLateral) {
        btnHamburger.addEventListener('click', () => {
            menuLateral.classList.toggle('aberto');
        });
    }

    linksDoMenu.forEach(link => {
        link.addEventListener('click', () => {
            if (menuLateral.classList.contains('aberto')) {
                menuLateral.classList.remove('aberto');
            }
        });
    });

    const handleScroll = () => {
        if (secaoEntrada && menuLateral && btnHamburger) {
            const alturaEntrada = secaoEntrada.offsetHeight;
            if (window.scrollY >= alturaEntrada - 50) {
                menuLateral.classList.add('visivel');
                btnHamburger.classList.add('visivel');
            } else {
                menuLateral.classList.remove('visivel');
                btnHamburger.classList.remove('visivel');
            }
        }

        if (btnTopo) {
            if (window.scrollY > 400) {
                btnTopo.classList.add('visivel');
            } else {
                btnTopo.classList.remove('visivel');
            }
        }

        let secaoAtivaId = '';
        todasAsSecoes.forEach(secao => {
            const topoDaSecao = secao.offsetTop - 150;
            const alturaDaSecao = secao.offsetHeight;
            if (window.scrollY >= topoDaSecao && window.scrollY < topoDaSecao + alturaDaSecao) {
                secaoAtivaId = secao.getAttribute('id');
            }
        });

        linksDoMenu.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${secaoAtivaId}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);

});