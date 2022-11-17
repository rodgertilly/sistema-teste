let lista = [];
let item = "";
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let itemAdicionar = true;
let opcao = "";

while (itemAdicionar) {
    item = prompt("Qual item deseja inserir?");
    if (item == null) {
        alert("Você não inseriu um item válido.")
        continue
    }
    opcao = prompt("Você escolheu o item: " + item + ". Selecione a categoria do item: \n1 - Frutas \n2 - Laticinios \n3 - Congelados \n4 - Doces");
    if (opcao == "1") {
        frutas.push(item);
    }
    else if (opcao == "2") {
            laticinios.push(item);
    }
    else if (opcao == "3") {
            congelados.push(item);
    }
    else if (opcao == "4") {
            doces.push(item);
    }
    else { 
        alert("Categoria inválida. Tente novamente.");
        continue;
    }
    itemAdicionar = confirm("Deseja adicionar outro item?");
    if (itemAdicionar == false){
        break;
    }
}
alert("Lista de compras: \nFrutas: " + frutas.join(', ') + "\nLaticínios: " + laticinios.join(', ') + "\nCongelados: " + congelados.join(', ') + "\nDoces: " + doces.join(', '));