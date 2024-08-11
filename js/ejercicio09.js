// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:



// input: Hola mundo
// Output: oauo


const frase = prompt("Ingrese una frase").toLowerCase();

console.log(frase);
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
console.log(frase.length);
console.log(frase.substring(0, 3));
console.log(frase.charAt(3));

for(let caracter = 0; caracter < frase.length; caracter++){
  if (
    frase.charAt(caracter) === "a" ||  
    frase.charAt(caracter) === "e" ||
    frase.charAt(caracter) === "i" ||
    frase.charAt(caracter) === "o" ||
    frase.charAt(caracter) === "u"
  ) {
    document.write(frase.charAt(caracter));
  }
}