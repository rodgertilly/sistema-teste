const vue = "vue";
const react = "react";
const c = "c#";
const java = "java";

const vueMsg = "Que bacana! Você quer aprender VUE!";
const reactMsg = "Que bacana! Você quer aprender REACT!";
const cMsg = "Que bacana! Você quer aprender C#!";
const javaMsg = "Que bacana! Você quer aprender Java!";

let porta = 0;
let porta1Opcao = 0;
let porta2Opcao = 0;

porta = prompt("Você está caminhando por um corredor e chega em uma sala com duas portas, que são os caminhos os quais você, como DEV, pode seguir. A porta número 1 possui os dizeres: FRONT-END, enquanto a porta número 2 possui os dizeres BACK-END. Qual porta você escolhe?");
    if (porta == 1) {
        while (porta1Opcao != 1 || porta1Opcao != 2) {
            alert("Você escolheu o caminho do FRONT-END. Nessa área você pode escolher entre aprender as tecnologias REACT ou VUE.");
            let porta1Opcao = prompt("Qual tecnologia você quer aprender? Digite 1 para REACT ou 2 para VUE.");
            if (porta1Opcao == 1) {
                alert(reactMsg);
                break;
            }
            if (porta1Opcao == 2) {
                alert(vueMsg);
                break;
            }
        
            else {
                alert("Você não fez uma escolha válida. Tente novamente.");
            }
        
        }
    }
    else if (porta == 2) {
        while (porta2Opcao != 1 || porta2Opcao != 2) {
            alert("Você escolheu o caminho do BACK-END. Nessa área você pode escolher entre aprender as tecnologias C# ou JAVA.");
            let porta2Opcao = prompt("Qual tecnologia você quer aprender? Digite 1 para C# ou 2 para JAVA.");
            if (porta2Opcao == 1) {
                alert(cMsg);
                break;
            } 
            if (porta2Opcao == 2) {
                alert(javaMsg);
                break;
            }

            else {
                alert("Você não fez uma escolha válida. Tente novamente.");
            }
        
        }
    }
    else {
        alert("Você não fez uma escolha válida e ficará para sempre dentro do labirinto DEV");
    }

while (porta != 0) {
    porta = prompt("Tem alguma outra linguagem que você gostaria de aprender? Temos as opções REACT, VUE, C# e JAVA. Se não quiser aprender mais nada, digite 0.")
    if (porta == "react") {
        alert(reactMsg);
    }
    else if (porta == "vue") {
        alert(vueMsg);
    }
    else if (porta == "c#") {
        alert(cMsg);
    }
    else if (porta == "java") {
        alert(javaMsg);
    }
    else if (porta == 0){
        break;
    }
    else {
        alert("Não entendi a opção. Tente novamente.");
    }
}