// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ejemplo: 

// input: 20
// input: 210




// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7.



let n1 = prompt("Escribe un número");

if (n1 % 2 == 0 || n1 % 3 == 0 || n1 % 5 == 0 || n1 % 7 == 0) {
    if (n1 % 2 == 0) {
        document.write("Es divisible por 2");
    }
    if (n1 % 3 == 0) {
        document.write("Es divisible por 3");
    }
    if (n1 % 5 == 0) {
        document.write("Es divisible por 5");
    }
    if (n1 % 7 == 0) {
        document.write("Es divisible por 7");
    }
} else {
    document.write("No es divisible por 2, ni por 3, ni por 5, ni por 7");
}
