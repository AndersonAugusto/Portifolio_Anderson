

const Keyboard = window.SimpleKeyboard.default;

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
        },
        {
            tema: "Casa",
            word: "Televisao"
        },
        {
            tema: "Escola",
            word: "professor"
        },
        {
            tema: "Escola",
            word: "diretoria"
        },
        {
            tema: "Escola",
            word: "matematica"
        },
        {
            tema: "Escola",
            word: "portugues"
        },
        {
            tema: "Escola",
            word: "historia"
        },
        {
            tema: "Escola",
            word: "ciencias"
        },
        {
            tema: "Familia",
            word: "mae"
        },
        {
            tema: "Familia",
            word: "pai"
        },
        {
            tema: "Familia",
            word: "tia"
        },
        {
            tema: "Familia",
            word: "sobrinho"
        },
        {
            tema: "Familia",
            word: "irma"
        },
        {
            tema: "Animais",
            word: "zebra"
        },
        {
            tema: "Animais",
            word: "cachorro"
        },
        
        {
            tema: "Animais",
            word: "gato"
        },
        
        {
            tema: "Animais",
            word: "cobra"
        },
        
        {
            tema: "Animais",
            word: "jacare"
        },
        
        {
            tema: "Animais",
            word: "leao"
        },
        
        {
            tema: "Animais",
            word: "cavalo"
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

let palavra = []
let escolha = []

onload = () => {
    document.getElementById('secret-word').innerHTML += escolha.join("")
    let moldeDica = `Dica: ${dica}`
    document.getElementById('dica').innerHTML = moldeDica
}


renderBars()
function renderBars(){
    for(let bar = 0; bar < secretWord.length; bar++){
        palavra.push(`${secretWord[bar]}`.toUpperCase())
        escolha.push(` _ `)
    }
}


const myKeyboard = new Keyboard({onKeyPress: button => onKeyPress({button: button , palavra: palavra , escolha: escolha})});

let number = 0
let bitGanhou = 0
function onKeyPress(button) {

    let Palavra = button.palavra
    let Escolha = button.escolha
    let Letra = button.button

    const letra = Letra.toUpperCase()

    if(Palavra.includes(letra)){
        
        for(let wordCompare = 0; wordCompare < Palavra.length; wordCompare++){
            
            if(letra == Palavra[wordCompare]){
                let index = Palavra.indexOf(Palavra[wordCompare])
                let letraCerta = Palavra[index]
                
                Palavra[index] = '-'
                Escolha[index] = letraCerta
                document.getElementById('secret-word').innerHTML = ""
                document.getElementById('secret-word').innerHTML += Escolha.join("")

                if(Escolha.includes(` _ `)){
                    console.log('Ainda não ganhou.')
                } else {
                    swal({
                        icon: "success",
                        title: "PARABÉNS VOCÊ È INCRÌVEL",
                        timer: 4000,
                        button: false
                    }).then(() => {
                        window.location.reload()
                    })
                }
            }
        }
    } else {
        number += 1
        verifyTurn(number)
        
        if(number <= 4){
            swal({
                title: "Você errou a letra, tente novamente",
                timer: 1000,
                button: false
            });
        } else {
            swal({
                title: `A palavra era: ${palavra.join("")} `,
                timer: 3000,
                button: false
            });
        }
    }
}


function verifyTurn(number){
    switch(number){
        case 1: 
            document.getElementById('cabeca').style.display = 'block'
        break;
        case 2: 
            document.getElementById('tronco').style.display = 'block'
        break;
        case 3: 
            document.getElementById('braco-esquerdo').style.display = 'block'
        break;
        case 4: 
            document.getElementById('braco-direito').style.display = 'block'
        break;
        case 5: 
            document.getElementById('pe-esquerdo').style.display = 'block'
        break;
        case 6: 
            document.getElementById('pe-direito').style.display = 'block'
        break;
    }

}



