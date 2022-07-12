

const products = [
    {
        name:'Pão',
        imagem: 'https://fermais.com.br/site20/wp-content/uploads/2019/09/melhor-pao-frances-dicas-scaled.jpg',
        description: 'preparado com farinha, geralmente de trigo ou outro cereal, água e sal, está presente na mesa de todos os povos e classes sociais. ',
        preco: '12,59 /kg',
        sku:'1234234'
    },
    {
        name:'Leite',
        imagem: 'https://www.foodservicenews.com.br/wp-content/uploads/2019/11/padaria.jpg',
        description: ' O leite é um alimento completo (tabela 3), tendo que ser consumido por crianças jovens e adultos.',
        preco: '2,36 p/l',
        sku:'2423424'
    },
    {
        name:'Bolacha',
        imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/7a93221fba5bbc5da8f2ad532adb1720_XL.jpg',
        description: 'Os biscoitos de água e sal e cream cracker são muito populares. Inicialmente feitos apenas com trigo e água, eles surgiram em 1885 na Inglaterra.',
        preco: '2,99',
        sku:'3234234'
    },
    {
        name:'Pizza',
        imagem: 'https://conexaoplaneta.com.br/wp-content/uploads/2017/06/recicla-ou-nao-recicla-caixa-pizza-conexao-planeta.jpg',
        description: ' O gosto da massa deve ser de pão bem fermentado, misturado ao sabor ácido do tomate, aroma de alho, orégano, manjericão.',
        preco: '48,99',
        sku:'4243424'
    },
    {
        name:'Açaí',
        imagem: 'https://conteudo.imguol.com.br/c/entretenimento/53/2018/10/08/acai-4-1539021469189_v2_1x1.jpg',
        description: 'A textura da polpa deve ser consistente, uniforme e lisa como uma massa homogênea. I',
        preco: '32,85',
        sku:'23451'
    },
    {
        name:'Tomate',
        imagem: 'https://cdn.wikifarmer.com/wp-content/uploads/2020/02/tomato-facts.jpg',
        description: ' Os frutos precisam ser limpos, livres de manchas de doenças e ter formato, simetria e tamanho uniformes. ',
        preco: '9,95',
        sku:'17457'
    },
    {
        name:'Limão',
        imagem: 'https://www.coisasdaroca.com/wp-content/uploads/2021/06/Limao.jpg',
        description: 'Possui uma casca geralmente fina, com superfície lisa, composta de duas frações distintas: o flavedo ou epicarpo e o albedo ou mesocarpo, facilmente separáveis da polpa, que corresponde à fração comestível do fruto.',
        preco: '11,25',
        sku:'45641'
    },
    {
        name:'Mamão',
        imagem: 'https://www.saudeemdia.com.br/media/_versions/mamao_widexl.jpg',
        description: 'O fruto proveniente de flores hermafroditas é alongado, com polpa mais espessa e, consequentemente, com cavidade central menor, por isso são comercialmente preferidas. ',
        preco: '4,55',
        sku:'167856'
    },
    {
        name:'Alface',
        imagem: 'https://agristar.com.br/upload/products/original/04129.jpg',
        description: 'No mercado brasileiro predomina o consumo da alface crespa, seguido da alface americana.',
        preco: '3,99',
        sku:'16575'
    },
    {
        name:'Batata',
        imagem: 'http://conteudo.imguol.com.br/c/entretenimento/0e/2017/10/15/batata-crua-1508077604971_v2_1920x1269.jpg',
        description: 'Nas cultivares para consumo de mesa, as características apontadas como essenciais para o mercado atual brasileiro são: a aparência de tubérculo, película lisa e brilhante, formato alongado, gemas superficiais, polpa de cor creme ou amarela e resistência ao esverdeamento.',
        preco: '5,99',
        sku:'567561'
    },
    {
        name:'Pêssego',
        imagem: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3193945:1645120337/image/p%C3%AAssego%203.jpg?f=16x9&$p$f=a08fbe8',
        description: 'O pêssego é rico em fibras, bom para o funcionamento do intestino. Contém minerais como fósforo, magnésio, manganês, cobre, iodo e ferro. ',
        preco: '7,89',
        sku:'1236'
    },
    {
        name:'Maçã',
        imagem: 'https://conteudo.imguol.com.br/c/entretenimento/32/2018/01/18/maca-1516308281068_v2_4x3.jpg',
        description: 'A maçã é o fruto da macieira, árvore da família Rosaceae, com tronco de casca parda, lisa e copa arredondada que chega a 10 m de altura. ',
        preco: '6,98',
        sku:'13453'
    },
    {
        name:'Rúcula',
        imagem: 'https://blog.cobasi.com.br/wp-content/uploads/2021/09/como-plantar-rucula-capa.png',
        description: 'Além disso, estimulam a liberação de melanina e protegem contra os raios UV. Comer rúcula também ajuda a fortalecer o sistema imunológico. Isso graças aos níveis de vitamina C que estão presentes no vegetal.',
        preco: '6,55',
        sku:'134535'
    },
    {
        name:'Uva',
        imagem: 'https://www.infoescola.com/wp-content/uploads/2010/04/uvas_665365768.jpg',
        description: 'De forma geral, a uva é uma fruta rica em ferro, cálcio, fósforo, magnésio, potássio e sódio. ',
        preco: '5,80',
        sku:'1435345'
    },
    {
        name:'Laranja',
        imagem: 'https://www.remedio-caseiro.com/wp-content/uploads/2014/02/20190923-laranjas.jpg',
        description: 'Oferta abundante e alta qualidade para a produção de sucos. Clima favorável e safra durante o ano todo. Baixo custo de produção. ',
        preco: '7,69',
        sku:'234211'
    },
    {
        name:'Abacate',
        imagem: 'https://www.saudeemdia.com.br/media/_versions/abacate_beneficios_widexl.jpg',
        description: 'A árvore tem casca aromática, rugosa na vertical e de cor cinza escuro, podendo ocorrer grandes variações de cor, formato, tamanho, casca, polpa e semente, dependendo das raças e variedades.',
        preco: '7,95',
        sku:'1235423'
    }    
]