const btnTopo = document.getElementById('btn-topo');
function toggleBotaoTopo() {
    if (window.scrollY > 100) { 
        btnTopo.classList.add('visivel'); 
    } else {
        btnTopo.classList.remove('visivel');
    }
}
window.addEventListener('scroll', toggleBotaoTopo);

document.addEventListener('DOMContentLoaded', function() {
    const btnHamburger = document.querySelector('.btn-hamburger');
    const menuLateral = document.querySelector('.menu-lateral');

    btnHamburger.addEventListener('click', function() {
        menuLateral.classList.toggle('aberto');
    });
});