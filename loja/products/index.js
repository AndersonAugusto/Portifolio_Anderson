




renderListOfProducts()
function renderListOfProducts(){
    document.getElementById('count').innerText = `Produtos quantidade: ( ${products.length} )`
    let produtos = document.getElementById('listOfProducts')

    products.forEach(product => {
        let moldProducts = `
            <section class="card">
                <img class="imgProduct" src="${product.imagem}" alt="">
                <p class="title">${product.name}</p>
                <p class="description">${product.description} </p>
                <div class="carrinho">
                <img src="../../imagens/carrinho-de-compras.png" alt="">
                <span>R$ ${product.preco} </span>
                </div>
            </section>
            `
        produtos.innerHTML += moldProducts
    });

}

