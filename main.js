var peso = prompt("Ingrese su peso en Kilogramos");
var estatura = prompt("Ingrese su estatura en metros");

function imc(peso, estatura) {

    var imc = peso / (estatura * estatura);

    return parseInt(imc);

}
alert("su IMC es " + imc(peso,estatura));
