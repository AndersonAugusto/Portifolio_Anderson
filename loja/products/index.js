

let carrinho = []

let carrinhoCount = document.getElementById('carrinhoCount');

carrinhoCount.innerText = 0

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
                <button class="carrinho" onclick="addCarrinho(this)" data-type="${product.name}" 
                name="${product.preco}" value="${product.imagem}">
                    <img src="../../imagens/carrinho-de-compras.png" alt="">
                    <span>R$ ${product.preco} </span>
                </button>
            </section>
            `
        produtos.innerHTML += moldProducts
    });
}


function addCarrinho(element){
    carrinhoCount.innerText = carrinho.length
    
    let cardSelected = {
        imagem: element.value,
        name: element.dataset.type,
        preco: element.name
    }
    carrinho.push(cardSelected)

    console.log('1')
    localStorage.setItem('carrinhoLojinha' , JSON.stringify(carrinho))
}

function closeModal(){
    document.getElementById('checkout').style.display = 'none'   
}
function showCheckout(){
    document.getElementById('checkout').style.display = 'block'
}