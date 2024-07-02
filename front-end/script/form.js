function calcularMedia()
{
    var nota1 = document.getElementById('nota1').value;
    //docment.getElementById busca um elemento no html, 
    //value pega o valor digitado no elemento html
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;

    nota1 = parseFloat(nota1); // parseFloat converte texto em numero flutuante
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);

    var media = (nota1 + nota2 + nota3)/3;

    var spanMedia = document.getElementById('media');
    spanMedia.textContent = media;
    //spanMedia.innerHTML = `${media}`; // inclui tyexto inteiros no html

}