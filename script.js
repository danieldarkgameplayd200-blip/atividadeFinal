function verProduto() {
    const select = document.getElementById('produtoSelect');
    const mensagem = document.getElementById('mensagem');
    const nome = document.getElementById('nomeProduto');
    const descricao = document.getElementById('descricaoProduto');
    const preco = document.getElementById('precoProduto');
    const imagem = document.getElementById('imagem');

    const produto = select.value;

    if (produto === '') {
        mensagem.textContent = 'Selecione um produto válido';
        nome.textContent = '';
        descricao.textContent = '';
        preco.textContent = '';
        imagem.src = 'imagens/padrao.png';
        return;
    }

    mensagem.textContent = '';

    switch (produto) {
        case 'laptop':
            nome.textContent = 'Laptop';
            descricao.textContent = 'Um laptop potente para trabalho e jogos.';
            preco.textContent = 'Preço: R$ 2500,00';
            imagem.src = 'imagens/notebook.jpg';
            break;
        case 'smartphone':
            nome.textContent = 'Smartphone';
            descricao.textContent = 'Smartphone moderno com câmera de alta qualidade.';
            preco.textContent = 'Preço: R$ 1500,00';
            imagem.src = 'imagens/smartphone.jpg';
            break;
        case 'tablet':
            nome.textContent = 'Tablet';
            descricao.textContent = 'Tablet leve e versátil para entretenimento.';
            preco.textContent = 'Preço: R$ 800,00';
            imagem.src = 'imagens/tablet.jpg';
            break;
        case 'fone':
            nome.textContent = 'Fone de Ouvido';
            descricao.textContent = 'Fone sem fio com cancelamento de ruído.';
            preco.textContent = 'Preço: R$ 300,00';
            imagem.src = 'imagens/fone.jpg';
            break;
        case 'mouse':
            nome.textContent = 'Mouse';
            descricao.textContent = 'Mouse ergonômico para produtividade.';
            preco.textContent = 'Preço: R$ 50,00';
            imagem.src = 'imagens/mouse.jpg';
            break;
        case 'teclado':
            nome.textContent = 'Teclado';
            descricao.textContent = 'Teclado mecânico RGB.';
            preco.textContent = 'Preço: R$ 200,00';
            imagem.src = 'imagens/teclado.jpg';
            break;
        case 'monitor':
            nome.textContent = 'Monitor';
            descricao.textContent = 'Monitor 4K para alta resolução.';
            preco.textContent = 'Preço: R$ 1200,00';
            imagem.src = 'imagens/monitor.jpg';
            break;
        case 'impressora':
            nome.textContent = 'Impressora';
            descricao.textContent = 'Impressora multifuncional a laser.';
            preco.textContent = 'Preço: R$ 600,00';
            imagem.src = 'imagens/impressora.jpg';
            break;
        default:
            mensagem.textContent = 'Produto não encontrado';
    }
}

function limpar() {
    document.getElementById('produtoSelect').value = '';
    document.getElementById('mensagem').textContent = '';
    document.getElementById('nomeProduto').textContent = '';
    document.getElementById('descricaoProduto').textContent = '';
    document.getElementById('precoProduto').textContent = '';
    document.getElementById('imagem').src = 'imagens/padrao.png';
}