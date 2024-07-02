import Pilha from "../class/Pilha.js";

console.log("\n============== PILHAS ==============");

var pilha = new Pilha();

pilha.adicionar({nome: "Produto 1", valor: 10});
pilha.adicionar({nome: "Produto 2", valor: 1.99});
pilha.adicionar({nome: "Produto 3", valor: 5});
var produto4 = {nome: "Produto 4", valor: 8.5};
pilha.adicionar(produto4);
console.log("Pilha atual:", pilha.tamanho());
console.log("Quem são os itens na pilha");
console.log(pilha.toString());

console.log("O proximo produto a sair: ", pilha.ver());

var produto = pilha.remover();
console.log(`O produto: ${produto.nome} estragou, perdi R$ ${produto.valor}`);

var vendas = new Pilha();

console.log("Vendas atuais:", vendas.tamanho());
console.log("Pilha atual:", pilha.tamanho());

console.log("Leva 2 produtos da pilha para vendas!");
vendas.adicionar(pilha.remover());
vendas.adicionar(pilha.remover());

console.log("Vendas depois do movimento: ", vendas.tamanho());
console.log("pilha depois do remover: ", pilha.tamanho());


