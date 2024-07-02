function calcular()
{
    var tutor = document.getElementById("tutor");
    var pet = document.getElementById("pet");
    var servicos = document.getElementsByTagName("input");

    var msg = document.querySelectorAll(".erro");
    erro = false;

    if(tutor.value == "")
    {
        tutor.style = "border: 1px solid red"
        msg[0].innerHTML = "Preencha o nome do tutor";
    }
    else
    {
        tutor.style = "border: thin solid black"
        msg[0].innerHTML = "";
    }

   if(pet == "")
    {
        tutor.style = "border: 1px solid red"
        msg[1].innerHTML = "preencha o nome do pet";
    }
    else
    {
        tutor.style = "border: thin solid black"
        msg[1].innerHTML = "";
    }

    var total = 0;

    for(let x =0; x < servicos.lenth; x++)
    {
        if(servicos[x].checked)
        {
            total + total +servicos[x].value;
        }
    }

    if(total == 0)
    {
         msg[2].innerHTML = "Você precisa usar pelo menos um serviço";
        
    }
    else
    {
        msg[2].innerHTML = "Total do(s) serviços = R$ " + total;
    }

    /*if(!erro)
    {
        var banho = document.getElementById("banho").value;
        var tosa = document.getElementById("tosa").value;
        var vacina = document.getElementById("vacina").value; 
        var total = 0;
        if(banho == checked)
        {
            total = total + banho;
        }
        else if(tosa == checked)
        {
            total = total + tosa;
        } 
        else if(vacina == checked)
        {
            total = total + vacina;
        }
        else
        {
          var msg = "Você precisa usar pelo menos um serviço";
        }
    }*/




    
}