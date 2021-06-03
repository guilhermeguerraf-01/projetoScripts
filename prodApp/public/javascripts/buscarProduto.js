var campoFiltro = document.querySelector('#buscar-produto');

campoFiltro.addEventListener('input', function() {
    let expressao = new RegExp(this.value, 'i');

    let produtos = document.querySelectorAll('.tabela-item');
    
    if (this.value.length > 0) {
        for (let i = 0; i < produtos.length; i++) {
            let nomeProduto = produtos[i].querySelector('.info-nome').textContent;

            if (!expressao.test(nomeProduto)) {
                produtos[i].classList.add('invisivel');
            } else {
                produtos[i].classList.remove('invisivel');
            }
        }
    } else {
        for (let i = 0; i < produtos.length; i++) {
            produtos[i].classList.remove('invisivel');
        }
    }
});
