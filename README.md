# Arquivos do desafio 7 Days of Code da Alura

> Status do desafio: dia 3 de 7

Desafio do dia 1 foi concluído com sucesso.

O gabarito do desafio 1 é

````
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
````

Desafio do dia 2 foi concluído. Novamente o resultado foi ok. O gabarito é:
````
const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"!`;

alert(msg);

const gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 - SIM ou 2 - NÃO`);
if (gosta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (gosta == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
````
Desafio do dia 3 foi concluído. Porém, acredito que o código está horrível, apesar de atender aos resquisitos POG.
