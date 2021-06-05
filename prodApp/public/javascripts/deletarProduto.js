const botaoExcluir = document.querySelectorAll('.deletar');

const xhr = new XMLHttpRequest();

botaoExcluir.forEach(botao => {

    botao.addEventListener('click', function() {
        const id = botao.getAttribute('data-id');

        xhr.open('delete', 'http://localhost:3000/produtos/' + id, true);
        xhr.send(null);
        
        location.reload();
    })
})