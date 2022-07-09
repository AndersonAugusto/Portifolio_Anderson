
let backlogColumn = document.getElementById('backlog')
let desenvolvimentoColumn = document.getElementById('desenvolvimento')
let empedimentoColumn = document.getElementById('empedimento')
let concluido = document.getElementById('concluido')
let lixeira = document.getElementById('lixeira')

let columnBacklog = JSON.parse(localStorage.getItem("columnBacklog")) || []
let columnDesenvolvimento = JSON.parse(localStorage.getItem("columnDesenvolvimento")) || []
let columnEmpedimento = JSON.parse(localStorage.getItem("columnEmpedimento")) || []
let columnConcluido = JSON.parse(localStorage.getItem("columnConcluido")) || []
let columnLixeira = JSON.parse(localStorage.getItem("columnLixeira")) || []
    
function renderBacklog() {
    document.getElementById('countBacklog').innerText = `( ${columnBacklog.length} )`
   
    backlogColumn.innerHTML = ""
    for(let backlog = 0; backlog < columnBacklog.length; backlog++){
        let backlogModel = `
        <div class="card-style card-kanban">
            <button class="close-btn close-btn-kanban" onclick="deleteCard(this)" data-type="backlog" value="${backlog}"> x </button>
            <h3>${columnBacklog[backlog].titulo}</h3>
            <p>${columnBacklog[backlog].descricao}</p>
            <button id="right" onclick="nextIndex(this)" data-type="backlog" value="${backlog}" class="right-btn button-card-right-kanban"> > </button>
            <button id="left" onclick="backIndex(this)" data-type="backlog" value="${backlog}" class="left-btn button-card-left-kanban"> < </button>
        </div>
    `
        backlogColumn.innerHTML += backlogModel
    }
}
function renderDesenvolvimento() {
    document.getElementById('countDesenvolvimento').innerText = `( ${columnDesenvolvimento.length} )`
    desenvolvimentoColumn.innerHTML = ""
    for(let desenvolvimento = 0; desenvolvimento < columnDesenvolvimento.length; desenvolvimento++){
        
        let desenvolvimentoModel = `
        <div class="card-style card-kanban">
        <button class="close-btn close-btn-kanban" onclick="deleteCard(this)" data-type="desenvolvimento" value="${desenvolvimento}"> x </button>
            <h3>${columnDesenvolvimento[desenvolvimento].titulo}</h3>
            <p>${columnDesenvolvimento[desenvolvimento].descricao}</p>
            <button id="right" data-type="desenvolvimento" onclick="nextIndex(this)" value="${desenvolvimento}" class="right-btn button-card-right-kanban"> > </button>
            <button id="left" data-type="desenvolvimento" onclick="backIndex(this)" value="${desenvolvimento}" class="left-btn button-card-left-kanban"> < </button>
        </div>
    `
        desenvolvimentoColumn.innerHTML += desenvolvimentoModel
    }
}
function renderEmpedimento() {
    document.getElementById('countEmpedimento').innerText = `( ${columnEmpedimento.length} )`
  
    empedimentoColumn.innerHTML = ""
    for(let empedimento = 0; empedimento < columnEmpedimento.length; empedimento++){
        
        let empedimentoModel = `
        <div class="card-style card-kanban">
        <button class="close-btn close-btn-kanban" onclick="deleteCard(this)" data-type="empedimento" value="${empedimento}"> x </button>
            <h3>${columnEmpedimento[empedimento].titulo}</h3>
            <p>${columnEmpedimento[empedimento].descricao}</p>
            <button id="right" data-type="empedimento" onclick="nextIndex(this)" value="${empedimento}" class="right-btn button-card-right-kanban"> > </button>
            <button id="left" data-type="empedimento" onclick="backIndex(this)" value="${empedimento}" class="left-btn button-card-left-kanban"> < </button>
        </div>
    `
        empedimentoColumn.innerHTML += empedimentoModel
    }
}
function renderConcluido() {
    document.getElementById('countConcluido').innerText = `( ${columnConcluido.length} )`
   
    concluido.innerHTML = ""
    for(let Concluido = 0; Concluido < columnConcluido.length; Concluido++){
         
        let ConcluidoModel = `
        <div class="card-style concluido card-kanban">
        <button class="close-btn close-btn-kanban" onclick="deleteCard(this)" data-type="concluido" value="${Concluido}"> x </button>
            <h3>${columnConcluido[Concluido].titulo}</h3>
            <p>${columnConcluido[Concluido].descricao}</p>
            <button id="right" data-type="concluido" onclick="nextIndex(this)" value="${Concluido}" class="right-btn button-card-right-kanban"> > </button>
            <button id="left" data-type="concluido" onclick="backIndex(this)" value="${Concluido}" class="left-btn button-card-left-kanban"> < </button>
        </div>
    `

        concluido.innerHTML += ConcluidoModel
    }
}
function renderLixeira() {
    document.getElementById('countLixeira').innerText = `( ${columnLixeira.length} )`
    lixeira.innerHTML = ""
    for(let Lixeira = 0; Lixeira < columnLixeira.length; Lixeira++){
        let LixeiraModel = `
        <div class="card-style excluido card-kanban">
        <button class="close-btn close-btn-kanban" onclick="deleteCard(this)" data-type="lixeira" value="${Lixeira}"> x </button>
            <h3>${columnLixeira[Lixeira].titulo}</h3>
            <p>${columnLixeira[Lixeira].descricao}</p>
            <button id="right" data-type="lixeira" onclick="nextIndex(this)" value="${Lixeira}" class="right-btn button-card-right-kanban"> > </button>
            <button id="left" data-type="lixeira" onclick="backIndex(this)" value="${Lixeira}" class="left-btn button-card-left-kanban"> < </button>
        </div>
    `
        lixeira.innerHTML += LixeiraModel
    }
}

renderCards()
async function renderCards() {
     renderBacklog()
     renderDesenvolvimento()
     renderEmpedimento()
     renderConcluido()
     renderLixeira()
}

async function nextIndex(element) {
    const type = element.dataset.type
    const index = element.value
    
    if(type === 'backlog') {
        columnDesenvolvimento.push(columnBacklog[index])
        columnBacklog.splice(index , 1)

        await this.renderBacklog()
        await this.renderDesenvolvimento()
        await this.setLocalStorage()
    }
    
    if(type === 'desenvolvimento') {
        
        columnEmpedimento.push(columnDesenvolvimento[index])
        columnDesenvolvimento.splice(index , 1)

        await this.renderDesenvolvimento()
        await this.renderEmpedimento()
        await this.setLocalStorage()
    }

    if(type === 'empedimento') {
        
        columnConcluido.push(columnEmpedimento[index])
        columnEmpedimento.splice(index , 1)

        await this.renderEmpedimento()
        await this.renderConcluido()
        await this.setLocalStorage()
    }

    if(type === 'concluido') {
        
        columnLixeira.push(columnConcluido[index])
        columnConcluido.splice(index , 1)

        await this.renderConcluido()
        await this.renderLixeira()
        await this.setLocalStorage()
    }

    if(type === 'lixeira') {
        columnLixeira.splice(index , 1)
        
        await this.renderLixeira()
        await this.setLocalStorage()
    }
}
async function backIndex(element) {
    const type = element.dataset.type
    const index = element.value
    
    if(type === 'backlog') {
        columnDesenvolvimento.push(columnBacklog[index])
        columnBacklog.splice(index , 1)

        await this.renderBacklog()
        await this.setLocalStorage()
    }
    
    if(type === 'desenvolvimento') {
        
        columnBacklog.push(columnDesenvolvimento[index])
        columnDesenvolvimento.splice(index , 1)

        await this.renderDesenvolvimento()
        await this.renderBacklog()
        await this.setLocalStorage()
    }

    if(type === 'empedimento') {
        
        columnDesenvolvimento.push(columnEmpedimento[index])
        columnEmpedimento.splice(index , 1)

        await this.renderEmpedimento()
        await this.renderDesenvolvimento()
        await this.setLocalStorage()
    }

    if(type === 'concluido') {
        
        columnEmpedimento.push(columnConcluido[index])
        columnConcluido.splice(index , 1)

        await this.renderConcluido()
        await this.renderEmpedimento()
        await this.setLocalStorage()
    }

    if(type === 'lixeira') {

        columnConcluido.push(columnLixeira[index])
        columnLixeira.splice(index , 1)

        await this.renderConcluido()
        await this.renderLixeira()
        await this.setLocalStorage()
    }
}
async function deleteCard(element) {
    const type = element.dataset.type
    const index = element.value

    if(type === 'backlog') {
        columnBacklog.splice(index , 1)
        await this.renderBacklog()
        await this.setLocalStorage()
    }
    if(type === 'desenvolvimento') {
        columnDesenvolvimento.splice(index , 1)
        await this.renderDesenvolvimento()
        await this.setLocalStorage()
    }
    if(type === 'empedimento') {
        columnEmpedimento.splice(index , 1)
        await this.renderEmpedimento()
        await this.setLocalStorage()
    }
    if(type === 'concluido') {
        columnConcluido.splice(index , 1)
        await this.renderConcluido()
        await this.setLocalStorage()
    }
    if(type === 'lixeira') {
        columnLixeira.splice(index , 1)
        await this.renderLixeira()
        await this.setLocalStorage()
    }
}
function getItemLocalStorage() {
    localStorage.getItem(columnBacklog)
    localStorage.getItem(columnDesenvolvimento)
    localStorage.getItem(columnEmpedimento)
    localStorage.getItem(columnConcluido)
    localStorage.getItem(columnLixeira)
}
function setLocalStorage() {
    localStorage.setItem('columnBacklog' ,JSON.stringify(columnBacklog))
    localStorage.setItem('columnDesenvolvimento' ,JSON.stringify(columnDesenvolvimento))
    localStorage.setItem('columnEmpedimento' ,JSON.stringify(columnEmpedimento))
    localStorage.setItem('columnConcluido' ,JSON.stringify(columnConcluido))
    localStorage.setItem('columnLixeira' ,JSON.stringify(columnLixeira))
}
