

 let innit = document.getElementById('innit');

onload = () => {
    innit.style.display = 'flex';
    document.documentElement.style.overflow = 'hidden';
}


function acessarHome(){
    let innit = document.getElementById('innit').style.display = 'none';
    document.documentElement.style.overflow = 'auto';
}


const button = document.getElementById("runaway-btn");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};
