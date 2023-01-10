let tPrato, tBebida, tSobremesa;
let pPrato, pBebida, pSobremesa;

let total = 0;

function fazerPedido(){
    
    // pegar a div com a classe overlay
    const overlay = document.querySelector('.overlay');
    // remover a classe escondido
    overlay.classList.remove('escondido');

    // preencher os nomes e precos dos itens selecionados
    const tituloPrato = document.querySelector('.prato .nome');
    tituloPrato.innerHTML = tPrato;
    document.querySelector('.prato .preco').innerHTML = pPrato;

    const tituloBebida = document.querySelector('.bebida .nome');
    tituloBebida.innerHTML = tBebida;
    document.querySelector('.bebida .preco').innerHTML = pBebida;

    const tituloSobremesa = document.querySelector('.sobremesa .nome');    
    tituloSobremesa.innerHTML = tSobremesa;    
    document.querySelector('.sobremesa .preco').innerHTML = pSobremesa;
    
    pPrato = pPrato.replace('R$','');
    pPrato = pPrato.replace(',','.');
    pPrato = Number(pPrato);
    
    pBebida = pBebida.replace('R$','');
    pBebida = pBebida.replace(',','.');
    pBebida = Number(pBebida);

    pSobremesa = Number(pSobremesa.replace('R$','').replace(',','.'));

    total = pPrato + pSobremesa + pBebida;

    document.querySelector('.preco-total').innerHTML = total.toFixed(2);

}

function cancelar(){
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('escondido');
}

function habilitarBotaoFecharPedido(){
    console.log(tPrato);
    console.log(tBebida);
    console.log(tSobremesa);

    // verificar se o prato foi selecionado
    if ( tPrato !== undefined){
        // verificar se a bebida foi selecionada
        if ( tBebida !== undefined){
            // verificar se a sobremesa foi selecionada
            if ( tSobremesa !== undefined){
                // pegar o botao fechar pedido
                const botao = document.querySelector('.fazer-pedido');
                // adcionar a classe ativo
                botao.classList.add('ativo');
                // trocar o texto para "Fechar Pedido"
                botao.innerHTML = "Fechar Pedido";
            }
        }
    }
}

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

    tPrato = pratoSelecionado.querySelector('.titulo').innerHTML;
    pPrato = pratoSelecionado.querySelector('.preco').innerHTML;

    habilitarBotaoFecharPedido();
}

function selecionarBebida(bebidaSelecionada){
    const bebidaAnterior = document.querySelector('.bebidas .selecionado');
    if (bebidaAnterior !== null){
        bebidaAnterior.classList.remove('selecionado');
    }
    
    bebidaSelecionada.classList.add('selecionado');

    tBebida = bebidaSelecionada.querySelector('.titulo').innerHTML;
    pBebida = bebidaSelecionada.querySelector('.preco').innerHTML;
    
    habilitarBotaoFecharPedido()
}

function selecionarSobremesa(sobremesaSelecionada){
    const sobremesaAnterior = document.querySelector('.sobremesas .selecionado');
    if (sobremesaAnterior !== null){
        sobremesaAnterior.classList.remove('selecionado');
    }
    
    sobremesaSelecionada.classList.add('selecionado');

    tSobremesa = sobremesaSelecionada.querySelector('.titulo').innerHTML;
    pSobremesa = sobremesaSelecionada.querySelector('.preco').innerHTML;

    habilitarBotaoFecharPedido()
}

function enviarPedido(){
    const nome = prompt("Qual o nome?");
    const endereco = prompt("Qual o endereço?");

    const msg = `
        Olá, gostaria de fazer o pedido:
        - Prato: ${tPrato}
        - Bebida: ${tBebida}
        - Sobremesa: ${tSobremesa}
        Total: ${total.toFixed(2)}
        
        Nome: ${nome}
        Endereço: ${endereco}
    `;

    console.log(msg);

    const msgWP = encodeURIComponent(msg);

    const linkWP = `https://wa.me/5599999999999?text=${msgWP}`;

    window.location = linkWP;

}