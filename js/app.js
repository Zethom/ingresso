function comprar(){

    let tipoDeIngresso = document.getElementById(`tipo-ingresso`).value;
    let quantidade = document.getElementById(`qtd`).value;
    let numeroDeIngresso = document.getElementById(`qtd-${tipoDeIngresso}`).textContent;

    console.log(`Ingresso: ${tipoDeIngresso} Quantidade: ${quantidade} Quantidade de Ingressos: ${numeroDeIngresso}`);

    if((numeroDeIngresso > quantidade)){

        numeroDeIngresso = numeroDeIngresso - quantidade;
        document.getElementById(`qtd-${tipoDeIngresso}`).textContent = `${numeroDeIngresso}`;

    } else {

        alert(`Não foi possível realizar a compra do ingresso: Quantidade disponível insuficiente`);

    }

}