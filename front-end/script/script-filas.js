import Filas from "../class/Fila.js";

console.log("\n============== FILAS ==============");

// Cria uma instancia da classe para ser utilizada
var fila = new Filas();

// Verificar o tamanho da fila
console.log("Tamanho Atual: ", fila.tamanho());

// Adicionando elementos na fila
console.log("Adicionando 4 pessoas na fila");
fila.adicionar("pessoa 1");
fila.adicionar("pessoa 2");
fila.adicionar("pessoa 3");
fila.adicionar("pessoa 4");

console.log("\nTamanho após adicionar: ", fila.tamanho());
console.log(" Quem são as pessoas da fila?");
console.log(fila.toString());

// Ver/Usar quem e a primeira pessoa da fila, sem remover de lá
var pessoa = fila.ver();
console.log(`A primeira pessoa da fila é: ${pessoa}`);

console.log("Tamanho após ver: ", fila.tamanho());

//remover uma pessoa da fila
//esse processo retorna o primeiro item da fila 
console.log("A primeira pessoa foi embora: ", fila.remover());
console.log(" Quem são as pessoas na fila depois de remover?");
console.log(fila.toString());

// Usando em uma situação:
var tamanho = fila.tamanho();
for(var i = 0; i < tamanho; i++)
{
    console.log(` A ${fila.remover()} comprou o ingresso e foi embora!`);
}
console.log("Tamanho da fila depois das compras: ", fila.tamanho());