

let tabuleiro = document.getElementById('tabuleiro')

let sequenciaJogador1 = []
let sequenciaJogador2 = []
let letraInicial = 'X'

let letras = [letraInicial]

let combinacoes = [
    '123','456','789','147','258','369','159','753',
    '132','465','798','174','285','396','195','735',
    '231','564','879','417','825','639','519','375',
    '213','546','897','471','852','693','591','357',
    '312','646','987','741','528','963','915','573',
    '321','664','978','714','582','936','951','537'
]
function verificaCombinacao1(){
    for(let sequenciaJogador = 0; sequenciaJogador < sequenciaJogador1.length; sequenciaJogador++){
        for(let combinacao = 0; combinacao < combinacoes.length; combinacao++){
            let chances = combinacoes[combinacao]
            let pontoJogador = sequenciaJogador1.toString()
            let sequenciaJogador = pontoJogador.replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','')
    
            if(sequenciaJogador.includes(chances)){
                // alert(' Jogador 1 venceu! =D ')
                document.getElementById('campoSucess').style.display = "block"
                document.getElementById('jogador').innerText = "Parabéns jogador 1"
                setTimeout(() => resetaJogo() , 2500);
            }
        }
    }
}
function verificaCombinacao2(){
    for(let sequenciaJogador = 0; sequenciaJogador < sequenciaJogador2.length; sequenciaJogador++){
        for(let combinacao = 0; combinacao < combinacoes.length; combinacao++){
            let chances = combinacoes[combinacao]
            let pontoJogador = sequenciaJogador2.toString()
            let sequenciaJogador = pontoJogador.replace(',','').replace(',','').replace(',','').replace(',','').replace(',','').replace(',','')
    
            if(sequenciaJogador.includes(chances)){
                document.getElementById('campoSucess').style.display = "block"
                document.getElementById('jogador').innerText = "Parabéns jogador 2"
                setTimeout(() =>  resetaJogo(), 2500);
            }
        }
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
                    sequenciaJogador1.push(id)
                    
                    letras.pop()
                    letras.push('O')
                    verificaCombinacao1()
                } else {
                    box.innerHTML = letras[0]
                    sequenciaJogador2.push(id)
                    
                    letras.pop()
                    letras.push('X')
                    verificaCombinacao2()
                } 
            }
        }
    })
}


//RESETA JOGO
function resetaJogo(){
    window.location.reload()
} 