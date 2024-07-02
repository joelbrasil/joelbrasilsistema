//funções ou metodos
/*
Função e o nome recebido nas linguagens de progamação estruturadas.
Metodo e o nome recebido em linguagens Orientadas a objetos(OO)
*/

// Tem dois objetivos principais:
// 1º Realzar ações (movimento, alterações), por isso sempre um nome que inicia com 
// um verbo.
//2º Reaproveitar código e evitar repetições.

//Sua estrutura: function nome( argumento ){ operações }

//Função que exibe texto no console:
function imprimirTexto(texto)
{
    console.log("Texto enviado: ", texto);
}

//função que retorna um texto fomatado
function formatarTexto(texto, formato)
{
    if(formato == "maiuscula")
    {
        return texto.toUpperCase();
    }
    else if(formato == "minuscula")
    {
        return texto.toLawerCase();
    }
    else
    {
        console.log("Erro! formato informado invalido");
        return texto;
    }
}

var meuTexto = "Eu sou o lindão da mamãe!";

//imprime a variavel usando nossa função
imprimirTexto(meuTexto);

//imprime um texto enviado direto na função
imprimirTexto("Vamos tirar uma foto?");

//formata a variavel para maiuscula usando nossa função
//mas visualmente nada acontece.
formatarTexto(meuTexto, "maiuscula");

//agora formata e exibe no console.
console.log(formatarTexto(meuTexto, "maiuscula"));

//formata o texto e coloca em uma nova variavel
var maiuscula = formatarTexto(meuTexto, "maiuscula");

console.log("Formatado: ", maiuscula);