var valores = [true, 5, false, "hola", "adios", 2];
var numeros = [];
var cadenas = [];
var booleanos = [];

valores.forEach(function(valor)
{
    switch(typeof valor)
    {
        case "string":
            cadenas.push(valor);
            break;
        case "number":
            numeros.push(valor);
            break;
        case "boolean":
            booleanos.push(valor);
            break;
    }
});

function text_mayor()
{
    var max = " ";
    for(var i = 0; i<cadenas.length; i++)
    {
        if(cadenas[i].length > max.length)
        {
            max = cadenas[i]
        }
    }

    document.write("El valor texto más grande es " + max + "<br>");
}

function mostrar_booleano()
{
    for(var i = 0; i<booleanos.length; i++)
    {
        if(booleanos[i] === true)
        {
            document.write(booleanos[i] + "<br>");
        }

        else 
        {
            document.write(booleanos[i] + "<br>");
        }
    }
}

function operaciones()
{
    var suma = numeros[0] + numeros[1];
    var resta = numeros[0] - numeros[1];
    var multip = numeros[0] * numeros[1];
    var div = numeros[0] / numeros[1];
    var resto = numeros[0] % numeros[1];

    document.write("Resultado suma: " + suma + "<br>Resultado resta: " + resta + "<br>Resultado multiplicación: " + multip + 
    "<br>Resultado división: " + div + "<br>Resultado resto: " + resto);
}
