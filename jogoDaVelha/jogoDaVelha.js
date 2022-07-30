

let tabuleiro = document.getElementById('tabuleiro')

let letraInicial = 'X'

const box1 = [] , box2 = [] , box3 = [] ,
      box4 = [] , box5 = [] , box6 = [] ,
      box7 = [] , box8 = [] , box9 = []

let letras = [letraInicial]
let placarStorageOne = parseInt(localStorage.getItem('placarOne')) || 0
let placarStorageTwo = parseInt(localStorage.getItem('placarTwo')) || 0

document.getElementById('playerOne').innerHTML = placarStorageOne
document.getElementById('playerTwo').innerHTML = placarStorageTwo

function winner(){
    const letterWinner = verifyCombinations()
    const textVictory = document.getElementById('text')

    if(letterWinner === 'X'){
        
        document.getElementById('campoSucess').style.display = 'block'
        textVictory.innerHTML = "Very good! player one"
        
        let placarOne = [placarStorageOne + 1]
        localStorage.setItem('placarOne' , placarOne)

        setTimeout(() => window.location.reload() , 2500)

    } else if(letterWinner === 'O') {

        document.getElementById('campoSucess').style.display = 'block'
        textVictory.innerHTML = "Very good! Player two"

        let placarTwo = [placarStorageTwo + 1]
        localStorage.setItem('placarTwo' , placarTwo)

        setTimeout(() => window.location.reload() , 2500)

    } else if(
        box1[0] && box2[0] && box3[0] &&
        box4[0] && box5[0] && box6[0] &&
        box7[0] && box8[0] && box9[0] ) {
            document.getElementById('campoSucess').style.display = 'block'
            textVictory.innerHTML = "Ops! Deu velha :("
            setTimeout(() => window.location.reload() , 2500)
        }
    else {
        console.log('Analizing...')
    }

}


jogoDaVelha()
async function jogoDaVelha(){
    tabuleiro.addEventListener('click' , (e) => {
        let id = e.target.id
        let box = e.target


        if(box.innerHTML.length < 1){
            if(id){        
                if(letras[0] == 'X'){
                    box.innerHTML = letras[0]
                    insertLetter(id)

                    letras.pop()
                    letras.push('O')
                    winner()
                } else {
                    box.innerHTML = letras[0]
                    insertLetter(id)

                    letras.pop()
                    letras.push('X')
                    winner()
                } 
            }
        }
    })
}


//RESETA JOGO
function resetaJogo(){
    window.location.reload()
    localStorage.removeItem('placarOne')
    localStorage.removeItem('placarTwo')
} 

function insertLetter(id) {
    switch(id){
        case "1":
            if(!box1[0]) box1.push(letras[0])
        break;
        case "2":
            if(!box2[0]) box2.push(letras[0])
        break;
        case "3":
            if(!box3[0]) box3.push(letras[0])
        break;
        case "4":
            if(!box4[0]) box4.push(letras[0])
        break;
        case "5":
            if(!box5[0])box5.push(letras[0])
        break;
        case "6":
            if(!box6[0]) box6.push(letras[0])
        break;
        case "7":
            if(!box7[0]) box7.push(letras[0])
        break;
        case "8":
            if(!box8[0]) box8.push(letras[0])
        break;
        case "9":
            if(!box9[0]) box9.push(letras[0])
        break;
    }
}

function verifyCombinations(){

    let letterChampion = []

    if(box1[0] || box2[0] || box3[0]){
        if(box1[0] === box2[0] && box2[0] === box3[0]){
            letterChampion = box1[0]
        }
    }
    if(box4[0] || box5[0] || box6[0]){
        if(box4[0] === box5[0] && box5[0] === box6[0]){
            letterChampion = box4[0]
        }
    }
    if(box7[0] || box8[0] || box9[0]){
        if(box7[0] === box8[0] && box8[0] === box9[0]){
            letterChampion = box7[0]
        }
    }
    if(box1[0] || box4[0] || box7[0]){
        if(box1[0] === box4[0] && box4[0] === box7[0]){
            letterChampion = box1[0]
        }
    }
    if(box2[0] || box5[0] || box8[0]){
        if(box2[0] === box5[0] && box5[0] === box8[0]){
            letterChampion = box2[0]
        }
    }
    if(box3[0] || box6[0] || box9[0]){
        if(box3[0] === box6[0] && box6[0] === box9[0]){
            letterChampion = box3[0]
        }
    }
    if(box1[0] || box5[0] || box9[0]){
        if(box1[0] === box5[0] && box5[0] === box9[0]){
            letterChampion = box1[0]
        }
    }
    if(box7[0] || box5[0] || box3[0]){
        if(box7[0] === box5[0] && box5[0] === box3[0]){
            letterChampion = box7[0]
        }
    }

    return letterChampion
}