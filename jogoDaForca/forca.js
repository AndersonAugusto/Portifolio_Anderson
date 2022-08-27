

const Keyboard = window.SimpleKeyboard.default;

const dicas = [
        {tema: "fruta", word: "Banana"},
        {tema: "fruta", word: "Abacate"},
        {tema: "Casa", word: "Quarto"},
        {tema: "Casa", word: "Cozinha"},
        {tema: "Casa", word: "Sala"},
        {tema: "Casa", word: "Televisao"},
        {tema: "Casa", word: "Garagem"},
        {tema: "Casa", word: "parede"},
        {tema: "Casa", word: "cama"},
        {tema: "Casa", word: "sofa"},
        {tema: "Casa", word: "portas"},
        {tema: "Casa", word: "estante"},
        {tema: "Escola", word: "professor"},
        {tema: "Escola", word: "diretoria"},
        {tema: "Escola", word: "matematica"},
        {tema: "Escola", word: "portugues"},
        {tema: "Escola", word: "historia"},
        {tema: "Escola", word: "ciencias"},
        {tema: "Escola", word: "apagador"},
        {tema: "Escola", word: "lapis"},
        {tema: "Escola", word: "apontador"},
        {tema: "cozinha", word: "prato"},
        {tema: "cozinha", word: "garfo"},
        {tema: "cozinha", word: "faca"},
        {tema: "cozinha", word: "frigideira"},
        {tema: "cozinha", word: "fogao"},
        {tema: "cozinha", word: "pia"},
        {tema: "cozinha", word: "fruteira"},
        {tema: "Familia", word: "mae"},
        {tema: "Familia", word: "pai"},
        {tema: "Familia", word: "tia"},   
        {tema: "Familia", word: "sobrinho"},
        {tema: "Familia", word: "irma"},
        {tema: "Animais", word: "zebra"},
        {tema: "Animais", word: "cachorro"},
        {tema: "Animais", word: "gato"},
        {tema: "Animais", word: "cobra"},
        {tema: "Animais", word: "jacare"},
        {tema: "Animais", word: "leao"},
        {tema: "Animais", word: "camaleao"},
        {tema: "Animais", word: "macaco"},
        {tema: "Animais", word: "cabra"},
        {tema: "Animais", word: "ovelha"},
        {tema: "Animais", word: "bode"},
        {tema: "Animais", word: "lagartixa"},
        {tema: "Animais", word: "grilo"},
        {tema: "Animais", word: "calopsita"},
        {tema: "Animais", word: "urso"},
        {tema: "Animais", word: "foca"},
        {tema: "Animais", word: "Baleia"},
        {tema: "Animais", word: "tubarao"},
        {tema: "Animais", word: "Hipopotamo"},
        {tema: "Animais", word: "Girafa"},
        {tema: "Animais", word: "papagaio"}
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
let pontuacao = JSON.parse(localStorage.getItem("pontos")) || []

onload = () => {
    let moldeDica = `Dica: ${dica}`
    document.getElementById('secret-word').innerHTML += escolha.join("")
    document.getElementById('dica').innerHTML = moldeDica
    document.getElementById('pontos').innerHTML = `Você tem <span class="pontin">${pontuacao}</span>  pontos`
}

renderBars()
function renderBars(){
    for(let bar = 0; bar < secretWord.length; bar++){
        palavra.push(`${secretWord[bar]}`.toUpperCase())
        escolha.push(` _ `)
    }
}


const myKeyboard = new Keyboard({onKeyPress: button => onKeyPress({button: button , palavra: palavra , escolha: escolha , secretWord: secretWord})});

let number = 0
let historyLetter = []
function onKeyPress(button) {

    let Palavra = button.palavra
    let Escolha = button.escolha
    let Letra = button.button
    const letra = Letra.toUpperCase()

    
    if(historyLetter.includes(letra)){
        swal({
            title: "EPA, essa letra já foi escolhida.",
            timer: 1000,
            button: false
        });
    } else {
        historyLetter.push(letra)

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
                        pontos(secretWord.length , 1 , 0)
                        swal({
                            icon: "success",
                            title: "PARABÉNS VOCÊ È INCRÌVEL",
                            button: "Jogar novamente"
                        }).then(() => {
                            document.getElementById('letrasErradas').innerHTML = ""
                            historyLetter = []
                            window.location.reload()
                        })
                    }
                }
            }
        } else {
            number += 1
            verifyTurn(number)

            document.getElementById('letrasErradas').innerHTML += `<span>${Letra.toUpperCase()}</span>`

            if(number <= 5){
                swal({
                    title: "Você errou a letra, tente novamente",
                    timer: 1000,
                    button: false
                });
            } else {
                pontos(secretWord.length , 0 , 1)
                swal({
                    title: `A palavra era: ${secretWord.toUpperCase()} `,
                    button: "Jogar novamente"
                }).then(() => {
                    document.getElementById('letrasErradas').innerHTML = ""
                    historyLetter = []
                    window.location.reload()
                })
            }
        }
    }
}

function pontos(lettersLength , sum , sub) {
    if(sum !== 0){
        let pontos = pontuacao + (lettersLength * 5)
        localStorage.setItem('pontos' , JSON.stringify(pontos))
    }
    if(sub !== 0) {
        let pontos = pontuacao - (lettersLength * 5)
        localStorage.setItem('pontos' , JSON.stringify(pontos))
    }

    return 
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



