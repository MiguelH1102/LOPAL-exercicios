let numAleatorio = parseInt(prompt("Digite um número aleatorio."));
// variavel numAleatorio amarzenara um número inteiro aleatorio.
// o comando parseInt(prompt("Digite um número aleatorio.")) vai mandar escrever um número aleatório inteiro.


if(isNaN(numAleatorio)) {
    alert("Erro, isso não é um número valido.");
}else{
    if(numAleatorio % 2 == 0) {
        alert("Seu número é par");
    }else{
        alert("Seu número é impar.");
    }
}

//if (isNaN(numAleatorio)) esse comando vai ver se você está digitando um número ou uma letra.
//os comandos if (numAleatorio % 2 == 0) e else{ alert("Seu número é impar.")} vai mostra e verificar se o número escrito é par ou impar com esse comando else sende enterpretado como ou. 