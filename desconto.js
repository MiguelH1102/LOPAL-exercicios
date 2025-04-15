let numCompra = parseFloat(prompt("Qual foi o valor da compra de hoje"));
let desComp = (numCompra * 0.1);
let valorDesc = numCompra - desComp
// a variavel numCompra armazenara um número real escrito por alguem, a variavel desComp vai armazenar o número aleatorio multiplicado por 0.1 e a variavel valorDesc vai amarzenar o número numCompra subtraido pelo desComp.
// o comando parseInt(prompt("Qual foi o valor da compra de hoje")) vai mandar escrever o valor da compra que foi feita hoje.


if(isNaN(numCompra)) {
    alert("Erro, isso não é um número valido.");
}else{
    if(numCompra>=100){
        alert("Você tem direito a um desconto de 10%");
        alert("Sua compra total foi de " +numCompra + " e a compra com o desconto foi de " +valorDesc );
    }else{
        if(numCompra<100) {
            alert("Deseja mais alguma coisa.");
        }
    }
}

//if (isNaN(numCompra)) esse comando vai ver se você está digitando um número ou uma letra.
//os comandos if(numCompra>=100) e if(numCompra<100) vai ver e escrever o valor da compra e vai escrever o valor da compra com um desconto de 10% e o comando if(numCompra<100) vai ver se o valor da compra vai ser menor que 100 e se for menor ele vai escrever alert("Deseja mais alguma coisa.").