
const modalTitulo = document.getElementById('modalTitulo')
const inputTitulo = document.getElementById('inputTitulo')
let sala = document.getElementById('sala')

function openCreate() {
    modalTitulo.style.display = 'flex'
}
function closeCreate() {
    inputTitulo.value = ""
    modalTitulo.style.display = 'none'
}
function desloga() {
    localStorage.removeItem('token')
    window.location.href = '/kanban-testes/'
}
function gobackPortifolio() {
    window.location.href = '/'
}


function limpaTudo(){
    swal({
        title: "ATENÇÃO",
        text: "Todos os ambientes serão deletados, deseja mesmo fazer isso ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Poof! todos os ambientes foram deletados.", {
              icon: "success",
            });
            localStorage.removeItem('cards')
            sala.innerHTML = ""
            document.location.reload(true);
        } 
    });
}

const recoveryStorage = JSON.parse(localStorage.getItem('cards')) || []
let tituloCard = [...recoveryStorage]

if(tituloCard.length < 1) {
    document.getElementById('limpa').disabled = true
    document.getElementById('limpa').style.opacity = '0.45'
} else {
    document.getElementById('limpa').disabled = false
}


function getValueCard(){
    if(inputTitulo.value.length < 1){
        swal({
            title: "Título obrigatório.",
            icon: "warning",
            timer: 3000,
        });
    } else {
        let titulo = inputTitulo.value
        tituloCard.push({titulo})
        localStorage.setItem('cards' , JSON.stringify(tituloCard))
        renderSections(tituloCard)
        closeCreate()
        document.location.reload(true);
    }
}

renderSections(tituloCard)
function renderSections(tituloCard){
    sala.innerHTML = ""
    tituloCard.forEach(titulos => {
        let moldeCards = `
        <a href="home.html" class="card card-ambientes">
            <h1>${titulos.titulo}</h1>
        </a>
        `
        sala.innerHTML += moldeCards
    });
}

