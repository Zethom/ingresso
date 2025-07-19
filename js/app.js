function comprar(){

    let tipoDeIngresso = document.getElementById(`tipo-ingresso`).value;
    let quantidade = parseInt(document.getElementById(`qtd`).value);
    let numeroDeIngresso = document.getElementById(`qtd-${tipoDeIngresso}`).textContent;

    console.log(`Ingresso: ${tipoDeIngresso} Quantidade: ${quantidade} Quantidade de Ingressos: ${numeroDeIngresso}`);

    if((numeroDeIngresso - quantidade) >= 0 && quantidade > 0){

        numeroDeIngresso = numeroDeIngresso - quantidade;
        document.getElementById(`qtd-${tipoDeIngresso}`).textContent = `${numeroDeIngresso}`;

    } else if (quantidade < 0) {

        alert(`Valor inserido inválido`);

    } else {

        alert(`Não foi possível realizar a compra do ingresso: Quantidade disponível insuficiente`);

    }

}