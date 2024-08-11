// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo: 

// input: 10
// input: 15
// Output: El 10 es divisible por 2.
// Output: El 15 no es divisible por 2.


const numero = parseInt(prompt("Ingresa un número:"));

if (numero % 2 === 0) {
    console.log("El " + numero + " es divisible por 2.");
} else {
    console.log("El " + numero + " no es divisible por 2.");
}
