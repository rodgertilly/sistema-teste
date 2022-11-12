const numeroSecreto = Math.floor(Math.random() * (9 - 1 + 1) + 1);
let totalDeTentativas = 3;
let mensagem = "";

for (let rodada = 1; rodada <= totalDeTentativas; rodada++) {
    alert("Rodada " + rodada + " de " + totalDeTentativas);
    let chute = prompt("Digite um número de 1 a 9");
    if (chute < 1 || chute > 9) {
        alert("Você deve digitar um valor entre 1 e 9");
        continue;
    }
    else if (chute == numeroSecreto) {
        alert("Você acertou!");
        mensagem = " Parabéns!!";
        break;
    }
    else {
        alert("Você errou!");
    }   
}
alert("Fim de jogo! O número era " + numeroSecreto + "." + mensagem);