let peso = parseInt(prompt("Ingresa tu peso en kilogramos:"));
let altura = parseInt(prompt("Ingresa tu altura en metros:"));
let imc = peso / (altura * altura);
let clasificacion;
if (imc < 18.5) {
    clasificacion = "Bajo peso";
} else if (imc >= 18.5 && imc < 24.9) {
    clasificacion = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    clasificacion = "Sobrepeso";
} else {
    clasificacion = "Obesidad";
}
document.write("Tu IMC es " + imc.toFixed(2) + " y la clasificación es: " + clasificacion);
