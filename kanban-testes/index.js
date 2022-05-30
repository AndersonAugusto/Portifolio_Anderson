

let AllTestes = [
    {   
        question: 0,
        titulo: "Teste de stress",
        descricao: "Executar testes de stress"
    },
    {
        question: 1,
        titulo: "Teste de regressão",
        descricao: "Executar testes de regressão"
    },
    {
        question: 1,
        titulo: "Teste unitário",
        descricao: "Executar testes de unitário"
    },
    {
        question: 2,
        titulo: "Teste de caixa-branca",
        descricao: "Executar testes de caixa-branca"
    },
    {
        question: 3,
        titulo: "Teste de caixa-preta",
        descricao: "Executar testes de caixa-preta"
    },
    {
        question: 4,
        titulo: "Teste de domínio",
        descricao: "Executar testes de domínio"
    },
    {
        question: 5,
        titulo: "Teste de usabilidade",
        descricao: "Executar teste de usabilidade"
    },
    {
        question: 6,
        titulo: "Teste de segurança de software",
        descricao: "Executar teste de segurança de software"
    },
    {
        question: 7,
        titulo: "Teste de Performance",
        descricao: "Executar teste de Performance"
    },
    {
        question: 7,
        titulo: "Teste de instalação",
        descricao: "Executar teste de Instalação"
    },
    {
        question: 7,
        titulo: "Teste de integração",
        descricao: "Executar teste de integração"
    }
]

let quetions = [
    {
        titulo: '1. Tipo de sistema é um E-commerce ?'
    },
    {
        titulo: '2. Quantidade de usuário até 1000 ?'
    },
    {
        titulo: '3. Quantidade de usuário até 10.000 ?'
    },
    {
        titulo: '4. Quantidade de usuário acima de 10.000 ?'
    },
    {
        titulo: '5. Quantidade de produtos até 1000 ?'
    },
    {
        titulo: '6. Quantidade de produtos até 10.000 ?'
    },
    {
        titulo: '7. Quantidade de produtos acima de 10.000 ?'
    },
    {
        titulo: '8. Será utilizado em dispositivos de pequeno desempenho ? '
    },
    {
        titulo: ' questão à ser implementada '
    },
    {
        titulo: ' questão à ser implementada '
    },
    {
        titulo: ' questão à ser implementada '
    },
    {
        titulo: ' questão à ser implementada '
    },
    {
        titulo: ' questão à ser implementada '
    },
    {
        titulo: ' questão à ser implementada '
    }
]

let returnKanbanBacklog = JSON.parse(localStorage.getItem("columnBacklog")) || []
const testesEscolhidos = []


let columnBacklog = [...returnKanbanBacklog , ...testesEscolhidos]


callQuestions()
function callQuestions(){
   for(let b = 0; b < quetions.length; b++){
        const moldeQuestion = `
        <div class="options">
            <div class="title"> 
                <p>${quetions[b].titulo}</p>
            </div>
            <div class="buttonsForm">
                <input type="checkbox" name="${b}" onclick="getNumber(this)" value="${b}" data-nota="1">
            </div>
        </div>
        `
        document.getElementById('questions').innerHTML += moldeQuestion
    };
}
renderBacklogInnit()
function renderBacklogInnit() {
    document.getElementById('backlogList').innerHTML = ""
    document.getElementById('countBacklog').innerText = `(${returnKanbanBacklog.length})`
    for(let sugestions = 0; sugestions < returnKanbanBacklog.length; sugestions++) {
        let sugestionsMolde = `
            <div class="column style">
                <div id="backlog">
                        <div class="card-style innitBacklog" onclick="selectTest(this)" value="${sugestions}">
                        <button class="close-btn" onclick="deleteCard(this)" data-type="sugestion" value="${sugestions}"> x </button>
                        <h3>${returnKanbanBacklog[sugestions].titulo}</h3>
                        <p>${returnKanbanBacklog[sugestions].descricao}</p>
                    </div>
                    <button id="left" onclick="backIndex(this)" value="${sugestions}" class="left-btn btn-innit2"> < </button>
                    <span class="selected" id="selected"> 
                        <img src="checked.png" width="32px"/>
                    </span>
                </div>
            </div>
        `
        document.getElementById('backlogList').innerHTML += sugestionsMolde
    }
}
renderSugestoes()
function renderSugestoes(){
    document.getElementById('sugestaoList').innerHTML = ""
    document.getElementById('countBacklog2').innerText = `(${testesEscolhidos.length})`
    for(let tipos = 0; tipos < testesEscolhidos.length; tipos++) {
        let sugestionsMolde = `
            <div class="column style">
                <div id="backlog">
                        <div class="card-style innitBacklog" onclick="selectTest(this)" value="${tipos}">
                        <h3>${testesEscolhidos[tipos].titulo}</h3>
                        <p>${testesEscolhidos[tipos].descricao}</p>
                    </div>
                    <button id="right" onclick="nextIndex(this)" data-type="backlog" value="${tipos}" class="right-btn btn-innit"> > </button>
                </div>
            </div>
        `
        document.getElementById('sugestaoList').innerHTML += sugestionsMolde
    }
}

function getNumber(number){
    let indice = number.value

    for(let verify = 0; verify < AllTestes.length; verify++){
        let IdQuestao = AllTestes[verify].question
        if(IdQuestao === parseInt(indice)){
            testesEscolhidos.push(AllTestes[verify])
        }
    }
    renderSugestoes()
}
async function deleteCard(element) {
    let index = element.value
    let type = element.dataset.type

    if(type === 'sugestion'){
        returnKanbanBacklog.splice(index , 1)
        await this.renderBacklogInnit()
    }
}   
function setBacklog() {
    localStorage.setItem('columnBacklog' , JSON.stringify(returnKanbanBacklog))
}
async function nextIndex(element) {
    const index = element.value
    returnKanbanBacklog.push(testesEscolhidos[index])
    testesEscolhidos.splice(index , 1)

    await this.renderBacklogInnit()
    await this.renderSugestoes()
}
async function backIndex(element) {
    const index = element.value
    testesEscolhidos.push(returnKanbanBacklog[index])
    returnKanbanBacklog.splice(index , 1)

    await this.renderBacklogInnit()
    await this.renderSugestoes()
}

function modalInfo() {
    document.getElementById('orientation').classList.toggle('d-block')
}
