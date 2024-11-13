let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let adivinanza;
let intentos = 0;
do {
    adivinanza = parseInt(prompt("Adivina el número entre 1 y 100:"));
    intentos++;
    
    if (adivinanza < numeroSecreto) {
        alert("El número es mayor.");
    } else if (adivinanza > numeroSecreto) {
        alert("El número es menor.");
    } else {
        alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
    }
} while (adivinanza !== numeroSecreto);
