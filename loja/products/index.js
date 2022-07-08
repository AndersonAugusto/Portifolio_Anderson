

let carrinhoOld = JSON.parse(localStorage.getItem('carrinhoLojinha')) || []

let carrinho = [...carrinhoOld]

let carrinhoCount = document.getElementById('carrinhoCount');

carrinhoCount.innerText = carrinho.length

renderListOfProducts()
function renderListOfProducts(){
    document.getElementById('count').innerText = `Quantidade: ( ${products.length} )`
    let produtos = document.getElementById('listOfProducts')

    products.forEach(product => {
        let moldProducts = `
            <section class="card">
                <img class="imgProduct" src="${product.imagem}" alt="">
                <p class="title">${product.name}</p>
                <p class="description">${product.description} </p>
                <button class="carrinho" onclick="addCarrinho(this)"
                    data-type="${product.name}" 
                    data-desc="${product.description}"
                    name="${product.preco}" 
                    value="${product.imagem}">
                    <img src="../../imagens/carrinho-de-compras.png" alt="">
                    <span>R$ ${product.preco} </span>
                </button>
            </section>
            `
        produtos.innerHTML += moldProducts
    });
}

function addCarrinho(element){
    checkout.innerHTML = ""

    let cardSelected = {
        imagem: element.value,
        name: element.dataset.type,
        preco: element.name,
        description: element.dataset.desc
    }
    carrinho.push(cardSelected)
    carrinhoCount.innerText = carrinho.length

    localStorage.setItem('carrinhoLojinha' , JSON.stringify(carrinho))
    renderCheckout()
}

const checkout = document.getElementById('checkout');
const fundoPreto = document.getElementById('fundoPreto');
const modal = document.getElementById('modal')
const valorTotal = document.getElementById('valorTotal')

renderCheckout()
function renderCheckout(){

    if(carrinho.length < 1){
        checkout.innerHTML = ' Vazio'
        valorTotal.innerText = `R$ 0,00`
    } else {

        let count = 0
        carrinho.forEach(produtc => {
            console.log(produtc.preco)
            count =  count + parseFloat(produtc.preco)
            
            let moldeCheckout = `
            <div class="boxProduct">
                <img src="${produtc.imagem}" alt="">
                <div class="descriptionCheckout">   
                    <h3>${produtc.name} </h3>
                    <p>${produtc.description} </p>
                </div>
                <p class="price">${produtc.preco}</p>
            </div>
            `
            checkout.innerHTML += moldeCheckout
        });
        valorTotal.innerText = `R$ ${count.toFixed(2)}` || 0
    }
}
    
function clearCarrinho(){
    console.log('1')
    localStorage.removeItem('carrinhoLojinha')
    checkout.innerHTML = ""
}
function closeModal(){
    checkout.classList.remove('showAnimation')
    fundoPreto.classList.remove('fundoPreto')
    checkout.classList.add('closeAnimation')
   
    setTimeout(() => {
        modal.style.display = 'none'
        // checkout.style.display = 'none'
    }, 200)
}
function showCheckout(){
    modal.style.display = 'block'
    // checkout.style.display = 'block'
    checkout.classList.remove('closeAnimation')
    checkout.classList.add('showAnimation')
    fundoPreto.classList.add('fundoPreto')
}