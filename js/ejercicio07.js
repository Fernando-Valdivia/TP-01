// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo: 

// input: 15 , 3, 9

// Output: El 15 es el número más grande

const num1 = parseInt(prompt("Ingresa el primer número:"));
const num2 = parseInt(prompt("Ingresa el segundo número:"));
const num3 = parseInt(prompt("Ingresa el tercer número:"));

const mayor = Math.max(num1, num2, num3);

console.log("El " + mayor + " es el número más grande");
