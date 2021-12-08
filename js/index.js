//cabaca-menu tem que ouvir o evento de click, como? sei lá
const cabecalhoMenu = document.querySelector('.cabecalho_menu')
const menuAtivo = document.querySelector('.menu-lateral')

cabecalhoMenu.addEventListener('click', function(){
    console.log('clicou?')
    menuAtivo.classList.toggle('menu-lateral-ativo')
})