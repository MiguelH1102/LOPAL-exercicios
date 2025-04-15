let idade = parseInt(prompt("Digite sua idade!"));
// variavel idade amarzenara um número inteiro que é a idade de alguem.
// o comando parseInt(prompt("Digite sua idade!")) vai mandar escrever sua idade.


if(isNaN(idade)) {
    alert("Erro, isso não é um número valido.");
}else{
    if(idade>=18) {
        alert("Você é maior de idade.");
    }else{
        if(idade<18) {
            alert("Você é menor de idade.");
        }
    }
}

//if (isNaN(idade)) esse comando vai ver se você está digitando um número ou uma letra.
//os comandos if (idade>=18) e if (idade<18) vai ver se sua idade é de menor ou de maior sendo o requisito para ser de maior 18 anos.