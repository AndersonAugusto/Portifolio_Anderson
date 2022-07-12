

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
                <div class="sku">
                    <p class="title">${product.name}</p>
                    <p> SKU: ${product.sku}</p>
                </div>
                <p class="description">${product.description} </p>
                <button class="carrinho" onclick="addCarrinho(this)"
                    data-type="${product.name}" 
                    data-desc="${product.description}"
                    data-sku="${product.sku}"
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
        description: element.dataset.desc,
        sku: element.dataset.sku
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
        checkout.innerHTML = ' Vazio'.toUpperCase()
        checkout.classList.add('vazioCarrinho')
        valorTotal.innerText = `R$ 0,00`
    } else {
        checkout.classList.remove('vazioCarrinho')
        let count = 0
        carrinho.forEach(produtc => {
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
        valorTotal.innerText = `R$ ${count},38` || 0
    }
}
    
function clearCarrinho(){
    localStorage.removeItem('carrinhoLojinha')
    checkout.innerHTML = ""
    document.location.reload(true);
    checkout.classList.add('vazioCarrinho')
}
function closeModal(){
    checkout.classList.remove('showAnimation')
    checkout.classList.add('closeAnimation')
    
    setTimeout(() => {
        fundoPreto.classList.remove('fundoPreto')
        modal.style.display = 'none'
    }, 200)
}
function showCheckout(){
    modal.style.display = 'block'
    // checkout.style.display = 'block'
    checkout.classList.remove('closeAnimation')
    checkout.classList.add('showAnimation')
    fundoPreto.classList.add('fundoPreto')
}


