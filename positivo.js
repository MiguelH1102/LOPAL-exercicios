let numInt = parseInt(prompt("Escreva um número")); 
// variavel numInt amarzenara um número inteiro.
// o comando parseInt(prompt("Escreva um número")) vai mandar escrever um número aleatório.

if (isNaN(numInt)) {
    alert("Erro você digitou um número invalido");
}else {
   if (numInt>0) {
    alert("O seu número é positivo");
   }else {
    if (numInt<0){
        alert("Seu número é negativo");
    
    }else {
        if (numInt==0){
            alert("Seu número é igual a zero");
        }
    }
   }
}

//if (isNaN(numInt)) esse comando vai ver se você está digitando um número ou uma letra.
//os comandos if (numInt>0) e if (numInt<0) vai ver se os número são positivos, negativos ou igual a zero.