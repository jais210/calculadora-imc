function imc(){
	var peso = parseInt(prompt("Ingrese su peso","En kilogramos..."));
	var estatura = parseFloat(prompt("Ingrese su estatura","1.70..."));
	var imc = parseInt(peso/(estatura*estatura));
	alert("Su IMC es "+imc+"\n\nPeso inferior al normal----Menos de 18.5\nNormal----18.5 – 24.9\nPeso superior al normal----25.0 – 29.9\nObesidad----Más de 30.0");
}
imc();