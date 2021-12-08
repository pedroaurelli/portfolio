const btnMenu = document.querySelector('#botaoMenu')


function toggleMenu(){
    const header = document.querySelector('.menuHeader');
    header.classList.toggle('active'); 
}


btnMenu.addEventListener('click', toggleMenu);