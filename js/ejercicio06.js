// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo: 

// input: 15 , 3


// Output: El 15 es el número más grande
const num1 = parseInt(prompt(`Escribe un numero`));
const num2 = parseInt(prompt(`Escribe un segundo numero`));

if (num1 > num2) { 
  document.write(`<p>${num1} Es mayor  </p>`)
  
} else if (num2 > num1) {
  document.write(`<p>${num2} Es mayor  </p>`)
  
} else { 
document.write (`<p>${num1} y ${num2} son iguales </p>`)
}

