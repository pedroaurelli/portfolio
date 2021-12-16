
menuMobile();

function menuMobile(){

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

}






initAnimacaoScroll();

function initAnimacaoScroll(){
    const conteudo = document.querySelectorAll('.js-section')
    const metadeTela = window.innerHeight * 0.7; 


    function animarScroll(){
        conteudo.forEach((item) =>{
            const sectionTop = item.getBoundingClientRect().top;
            const metadeVh = (metadeTela - sectionTop) 
            if (metadeVh > 0){
                item.classList.add('animarScroll')
            }
            
        })
    }

    window.addEventListener('scroll', animarScroll)
}











