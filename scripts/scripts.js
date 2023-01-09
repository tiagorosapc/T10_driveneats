
// ao clicar no prato
function selecionarPrato(pratoSelecionado){ //pegar o prato clicado
    // antes, verificar se tem prato selecionado anteriormente
    const pratoAnterior = document.querySelector('.pratos .selecionado');
    // se tiver, desmarcar
    if (pratoAnterior !== null){
        // desmarcar o prato selecionado anteriormente
        pratoAnterior.classList.remove('selecionado');
    }
    
    // marcar o prato selecionado adicionando a classe selecionado no prato clicado
    pratoSelecionado.classList.add('selecionado');
}

function selecionarBebida(bebidaSelecionada){
    const bebidaAnterior = document.querySelector('.bebidas .selecionado');
    if (bebidaAnterior !== null){
        bebidaAnterior.classList.remove('selecionado');
    }
    
    bebidaSelecionada.classList.add('selecionado');
}

function selecionarSobremesa(sobremesaSelecionada){
    const sobremesaAnterior = document.querySelector('.sobremesas .selecionado');
    if (sobremesaAnterior !== null){
        sobremesaAnterior.classList.remove('selecionado');
    }
    
    sobremesaSelecionada.classList.add('selecionado');
}
