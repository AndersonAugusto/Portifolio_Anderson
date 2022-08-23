

const Keyboard = window.SimpleKeyboard.default;

const myKeyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button)
});

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}


const dicas = [
        {
            tema: "fruta",
            word: "Banana"
        },
        {
            tema: "fruta",
            word: "Abacate"
        },
        {
            tema: "Casa",
            word: "Quarto"
        },
        {
            tema: "Casa",
            word: "Cozinha"
        },
        {
            tema: "Casa",
            word: "Sala"
        }
]


function sortWord(min , max){
    const temaNumber = Math.floor(Math.random() * (max - min) + min)
    const tema = dicas[temaNumber]
    return  tema
}

const word = sortWord(0 , dicas.length)

const dica = word.tema
const secretWord = word.word


renderBars()
function renderBars(){
    
    for(let bar = 0; bar < secretWord.length; bar++){
        let moldeBar = ` <span id="bars" class="bars"></span>   `
        document.getElementById('secret-word').innerHTML += moldeBar
    }

}



