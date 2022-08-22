

const padrao = {
    scale: 0.8,
    opacity: 0,
    easing:  'ease-out',
};

const leftOpacity = {};
const rightOpacity = {};

ScrollReveal().reveal('.anime-right' , padrao);
ScrollReveal().reveal('.anime-opacity-left' , padrao);
ScrollReveal().reveal('.anime-opacity-right' , padrao);




// document.addEventListener('scroll' , () => {
//     let eixoY = scrollY
//     let progresBar = document.getElementById('progresScroll')

//     progresBar.style.backgroundImage ="linear-gradient( to top, #000, transparent)";
//     console.log(eixoY)
// })