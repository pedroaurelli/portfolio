const btnMenu = document.querySelector('#botaoMenu');
const header = document.querySelector('.menuHeader');


function toggleMenu(){
    header.classList.toggle('active'); 
}

btnMenu.addEventListener('click', toggleMenu);



const linksInternos = document.querySelectorAll('.listaMenu a')

linksInternos.forEach(item =>{
    item.addEventListener('click', removeActive)
})

function removeActive(){
    header.classList.remove('active');
}










