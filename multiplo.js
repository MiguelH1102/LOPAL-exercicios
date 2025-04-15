let numMutipl = parseInt(prompt("Digite um número aleatorio"));
// variavel numInt amarzenara um número inteiro.
// o comando parseInt(prompt("Digite um número aleatorio")) vai mandar escrever um número aleatório inteiro.


if(isNaN(numMutipl)) {
    alert("Erro, isso não é um número valido");
}else{
    if(numMutipl % 5 == 0) {
        alert("Seu número é mutiplo de 5");
    }else{
        alert("Seu número não é multiplo de 5");
    }
}

//if (isNaN(numMutipl)) esse comando vai ver se você está digitando um número ou uma letra.
//os comandos if (numMutipl % 5 == 0) vai ver e escrever se o número é multiplo ou não  de 5 onde se for ele vai escrever alert("Seu número é mutiplo de 5") e se não for ele vai escrever alert("Seu número não é multiplo de 5").