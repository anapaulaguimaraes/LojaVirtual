//Exibir produtos Feminino
let vetor = [
    {'codigo': '1',  'nome': 'Blusa Xadrez',         'valor':'139,90', 'imagem': 'imagens/feminino/1.jpg',  'categoria': 'feminino'},
    {'codigo': '2',  'nome': 'Casaco Casual',        'valor':'218,80', 'imagem': 'imagens/feminino/2.jpg',  'categoria': 'feminino'},
    {'codigo': '3',  'nome': 'Camisa Social',        'valor':'89,90',  'imagem': 'imagens/feminino/3.jpg',  'categoria': 'feminino'},
    {'codigo': '4',  'nome': 'Camisa Bege',          'valor':'111,50', 'imagem': 'imagens/feminino/4.jpg',  'categoria': 'feminino'},
    {'codigo': '5',  'nome': 'Blusa Onça',           'valor':'79,90',  'imagem': 'imagens/feminino/5.jpg',  'categoria': 'feminino'},
    {'codigo': '6',  'nome': 'Blusa Preta',          'valor':'69,90',  'imagem': 'imagens/feminino/6.jpg',  'categoria': 'feminino'},

    //Exibir produtos Masculino
    {'codigo': '7',  'nome': 'Camisa Xadrez',        'valor':'35,40',  'imagem': 'imagens/masculino/1.jpg', 'categoria': 'masculino'},
    {'codigo': '8',  'nome': 'Camisa Longa',         'valor':'45,40',  'imagem': 'imagens/masculino/2.jpg', 'categoria': 'masculino'},
    {'codigo': '9',  'nome': 'Camisa Estampa',       'valor':'55,40',  'imagem': 'imagens/masculino/3.jpg', 'categoria': 'masculino'},
    {'codigo': '10', 'nome': 'Camisa Base',          'valor':'35,40',  'imagem': 'imagens/masculino/4.jpg', 'categoria': 'masculino'},
    {'codigo': '11', 'nome': 'Camisa Estampa ',      'valor':'65,40',  'imagem': 'imagens/masculino/5.jpg', 'categoria': 'masculino'},
    {'codigo': '12', 'nome': 'Camisa Social',        'valor':'75,40',  'imagem': 'imagens/masculino/6.jpg', 'categoria': 'masculino'},

    //Exibir produtos Infantil
    {'codigo': '13', 'nome': 'Camisa Rosa',          'valor':'15,40',  'imagem': 'imagens/infantil/1.jpg',  'categoria': 'infantil'},
    {'codigo': '14', 'nome': 'Camisa Sonic',         'valor':'25,40',  'imagem': 'imagens/infantil/2.jpg',  'categoria': 'infantil'},
    {'codigo': '15', 'nome': 'Vestido Vermelho',     'valor':'35,40',  'imagem': 'imagens/infantil/3.jpg',  'categoria': 'infantil'},
    {'codigo': '16', 'nome': 'Camisa Laranja',       'valor':'45,40',  'imagem': 'imagens/infantil/4.jpg',  'categoria': 'infantil'},
    {'codigo': '17', 'nome': 'Blusa Frio',           'valor':'55,40',  'imagem': 'imagens/infantil/5.jpg',  'categoria': 'infantil'},
    {'codigo': '18', 'nome': 'Vistido Onça',         'valor':'65,40',  'imagem': 'imagens/infantil/6.jpg',  'categoria': 'infantil'},
];

//Produtos selecionados
let carrinho = [];

//Listar produtos
let listar = (selecao) => {

    let produtos = document.getElementById('produtos');

    produtos.innerHTML = '';

    for (let i = 0; i < vetor.length; i++) {

        if (selecao == vetor[i].categoria || selecao == "produtos") {

            //Criar coluna
            let coluna = document.createElement('div');

            coluna.classList.add('col-3');

            //Criar imagem
            let imagem = document.createElement('img');
            imagem.src = vetor[i].imagem;
            imagem.classList.add('img-fluid');

            //Criar nome produto
            let nomeProduto = document.createElement('p');
            nomeProduto.innerText = vetor[i].nome;

            //Criar valor produto
            let valorProduto = document.createElement('p');
            valorProduto.innerText = vetor[i].valor;

            //Criar botão adicionar
            let botao = document.createElement('button');
            botao.classList.add('btn', 'btn-primary')
            botao.innerText = 'Adicionar';
            botao.addEventListener('click', () => {
                adicionar(vetor[i].codigo);
            });

            //Adicionar imagem e informações do produto na coluna
            coluna.appendChild(imagem);
            coluna.appendChild(nomeProduto);
            coluna.appendChild(valorProduto);
            coluna.appendChild(botao);

            produtos.appendChild(coluna);
        }
    }
}

//Adicionar produtos carrinho de compras
let adicionar = (codigo) => {

    //Verificar se possui o código no carrinho de compras
    let indice = carrinho.findIndex(obj => { return obj.codigo == codigo });

    if (indice == -1) {
        let obj = { 'codigo': codigo, 'quantidade': 1 }
        carrinho.push(obj);
    } else {
        let obj = carrinho[indice];
        obj.quantidade += 1;
        carrinho[indice] = obj;
    }

    itensSelecionados();
}

//Listar itens selecionados carrinho de compras
let itensSelecionados = () => {

    let exibirCarrinho = document.getElementById('exibirCarrinho');

    exibirCarrinho.innerHTML = '';

    for (let i = 0; i<carrinho.length; i++) {

        let produto = retornarProduto(carrinho[i].codigo);

        //Criar uma coluna
        let coluna = document.createElement('div');
        coluna.classList.add('col-6');

        //Criar a imagem
        let imagem = document.createElement('img');
        imagem.src = produto.imagem;
        imagem.classList.add('img-fluid');

        //Criar nome produto
        let nomeProduto = document.createElement('p');
        nomeProduto.innerText = produto.nome;

        //Criar valor produto
        let valorProduto = document.createElement('p');
        valorProduto.innerText = 'R$' + produto.valor;

        //Criar quantidade produto
        let quantidadeProduto = document.createElement('p');
        quantidadeProduto.innerText = 'Quantidade:' + carrinho[i].quantidade;

        //Adicionar imagem e informações do produto na coluna
        coluna.appendChild(imagem);
        coluna.appendChild(nomeProduto);
        coluna.appendChild(valorProduto);
        coluna.appendChild(quantidadeProduto);

        exibirCarrinho.appendChild(coluna);
    }
}

//Retornar objeto do vetor através do código do produto
let retornarProduto = (codigo) => {

    let indice = vetor.findIndex(obj => {
        return obj.codigo == codigo;
    });

    return vetor[indice];
}

//Pesquisar produtos
let pesquisar = () => {

    let termo = document.getElementById('termo').value;

    let produtos = document.getElementById('produtos');

    produtos.innerHTML = '';

    for (let i = 0; i < vetor.length; i++) {

        if (vetor[i].nome.toLocaleLowerCase().indexOf(termo.toLocaleLowerCase()) != -1) {

            //Criar coluna
            let coluna = document.createElement('div');

            coluna.classList.add('col-3');

            //Criar imagem
            let imagem = document.createElement('img');
            imagem.src = vetor[i].imagem;
            imagem.classList.add('img-fluid');

            //Criar nome produto
            let nomeProduto = document.createElement('p');
            nomeProduto.innerText = vetor[i].nome;

            //Criar valor produto
            let valorProduto = document.createElement('p');
            valorProduto.innerText = vetor[i].valor;

            //Criar botão adicionar
            let botao = document.createElement('button');
            botao.classList.add('btn', 'btn-primary')
            botao.innerText = 'Adicionar';
            botao.addEventListener('click', () => {
                adicionar(vetor[i].codigo);
            });

            //Adicionar imagem e informações do produto na colunaparágrafo na coluna
            coluna.appendChild(imagem);
            coluna.appendChild(nomeProduto);
            coluna.appendChild(valorProduto);
            coluna.appendChild(botao);

            produtos.appendChild(coluna);
        }
    }
}