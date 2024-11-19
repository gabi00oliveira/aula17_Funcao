/*
PROCEDIMENTO
Descrição: Exibe uma mensagem fixa
Nome: mostraAlerta
Parâmetro: void
Retorno: void
void -> significa que não retorna valor 
*/

function mostraAlerta() 
{
    alert("Não é que isso funciona mesmo!!!"); 
}


function mostraAlerta1(msg)
{
    alert("Boa noite, "+msg);
}

function mensagem_com_parametro_return(msg1)
{
    return("Você digitou" + msg1);
}

function calculaSoma(n1,n2)
{
 var soma = parseFloat (n1) + parseFloat (n2) 
 return(soma)
}
