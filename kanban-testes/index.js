

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
        titulo: '1. O tipo de aplicação da sua empresa é um sistema e-commerce ?'
    },
    {
        titulo: '2.  O tipo de aplicação da sua empresa é um sistema ERP e/ou App Mobile?'
    },
    {
        titulo: '3. A quantidade de usuários que sua empresa possui é de 50 a 500?'
    },
    {
        titulo: '4. A quantidade de usuários que sua empresa possui é de +500?'
    },
    {
        titulo: '5. Sua aplicação possui mais de 2 processos sendo executados simultaneamente?'
    },
    {
        titulo: '6. Sua empresa possui uma equipe especializada em testes de software?'
    },
    {
        titulo: '7. Quantidade de produtos acima de 10.000 ?'
    },
    {
        titulo: '8. Será utilizado em dispositivos de pequeno desempenho ? '
    }
]

let returnKanbanBacklog = JSON.parse(localStorage.getItem("columnBacklog")) || []
const testesEscolhidos = []

let columnBacklog = [...returnKanbanBacklog , ...testesEscolhidos]

callQuestions()
function callQuestions(){
   for(let b = 0; b < quetions.length; b++){
        const moldeQuestion = `
        <div class="options questions-home">
            <div class="title"> 
                <p>${quetions[b].titulo}</p>
            </div>
            <div class="buttonsForm">
                <input type="checkbox" name="${b}" onclick="getNumber(this)"  value="${b}" data-nota="1">
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
                        <div class="card-style card-home innitBacklog" onclick="selectTest(this)" value="${sugestions}">
                        <button class="close-btn close-btn-home" onclick="deleteCard(this)" data-type="sugestion" value="${sugestions}"> x </button>
                        <h3 class="title-home-card">${returnKanbanBacklog[sugestions].titulo}</h3>
                        <p class="description-home-card" >${returnKanbanBacklog[sugestions].descricao}</p>
                    </div>
                    <button id="left" onclick="backIndex(this)" value="${sugestions}" class="left-btn button-card-left-home btn-innit2"> < </button>
                    <span class="selected" id="selected"> 
                        <img src="img/checked.png" width="32px"/>
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
    
    let testesEscolhidosFilter = testesEscolhidos.filter((ele , pos) => {
        return testesEscolhidos.indexOf(ele) == pos
    })
    
    document.getElementById('countBacklog2').innerText = `(${testesEscolhidosFilter.length})`

    for(let tipos = 0; tipos < testesEscolhidosFilter.length; tipos++) {
        let sugestionsMolde = `
            <div class="column style">
                <div id="backlog">
                        <div class="card-style card-home innitBacklog" onclick="selectTest(this)" value="${tipos}">
                        <h3 class="title-home-card">${testesEscolhidosFilter[tipos].titulo}</h3>
                        <p class="description-home-card">${testesEscolhidosFilter[tipos].descricao}</p>
                    </div>
                    <button id="right" onclick="nextIndex(this)" data-type="backlog" value="${tipos}" class="right-btn btn-innit button-card-right-home"> > </button>
                </div>
            </div>
        `
        document.getElementById('sugestaoList').innerHTML += sugestionsMolde
    }
}
function getNumber(number){
    let indice = number.value
    let checkbox = number

    if (!checkbox.checked) {
        for(let verify = 0; verify < AllTestes.length; verify++) {
            let IdQuestao = AllTestes[verify].question
            if(IdQuestao === parseInt(indice)) {
                testesEscolhidos.splice(checkbox , 1)
            }
        }
        renderSugestoes()
    } else {
        for(let verify = 0; verify < AllTestes.length; verify++){
            let IdQuestao = AllTestes[verify].question
            if(IdQuestao === parseInt(indice)){
                testesEscolhidos.push(AllTestes[verify])
            }
        }
        renderSugestoes()
    }
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
