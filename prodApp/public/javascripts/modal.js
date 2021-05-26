function mostrarModal(modalID){
    const modal = document.getElementById(modalID);
    if(modal){
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'modal-fechar') {
                modal.classList.remove('mostrar');
            }
        });
    }
}