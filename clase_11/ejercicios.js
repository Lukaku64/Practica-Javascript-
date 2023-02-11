//MAP
// Ejercicio 1
// Tenemos un arreglo de números en la variable numbers y deberás crear uno nuevo que contenga el doble de cada número, usando .map().
let numbers = [3, 7, 13, 99];
// CODEA LA SOLUCIÓN
let dobles = numbers.map((num) => num * 2);
console.log(numbers); // [3, 7, 13, 99]
console.log(dobles); // [6, 14, 26, 198]

// Ejercicio 2
// Tenemos un arreglo en la variable frases con varias sentencias al azar. Usá la función map() para que cada frase empiece y termine con signos de exclamación.
let frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];
// CODEA LA SOLUCIÓN
let frasesExclamadas = frases.map((frase) => {
  return `¡${frase}!`;
});
console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]

//REDUCE
// Ejercicio 1
// Teniendo un Arreglo de números al azar (llamado numbers0), usá .reduce() para obtener la multiplicación total de todos los números.
let numbers0 = [6, 1, 34, 94, 3, 17];
const mul = numbers0.reduce((acc, num) => acc * num); // CODEA LA SOLUCIÓN
console.log(mul);
// debería mostrar 977976

// Ejercicio 2
// Teniendo un Arreglo de números en la variable numeros, usá .reduce() para crear un nuevo Arreglo que contenga solo los números impares.
let numeros = [3, 7, 6, 13, 2, 24, 99];
let impares = numeros.reduce((acc, num) => {
  if (!(num % 2 == 0)) {
    acc.push(num);
  }
  return acc;
}, []); // CODEA LA SOLUCIÓN
console.log(impares); // [3, 7, 13, 99]

// Ejercicio 3
// Teniendo un Arreglo de números (llamado numbers), usá .reduce() para obtener el máximo valor que posea el Arreglo.
let numbers1 = [5, 4, 1, 9, 2];
let max = numbers1.reduce((acc, num) => (acc > num ? acc : num)); // CODEA LA SOLUCIÓN
console.log(max);
// entiendo que acc > num (estos van haciendo comparacion y dependiendo de eso se quedara con el valor de acc o num, y seguiran comparando hasta terminar)
// debería mostrar 9

// Ejercicio 4
// Completá la Función join que reciba un Arreglo de números y retorne un String con todos los números concatenados.
let join = (arr) => {
  arr.reduce((prev, curr) => (prev += curr), "");
};
// CODEA LA SOLUCIÓN
console.log(join([1, 2, 3])); // "123"
// Nose porque la funcion me lo toma como undefined
console.log([1, 2, 3].reduce((prev, curr) => (prev += curr), ""));

// Ejercicio 5
// Teniendo un Arreglo de números en la variable numeros, usá .reduce() para crear un Arreglo con los mismos números pero eliminando los repetidos.
let numeros1 = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11];
let sinRepetidos = numeros1.reduce((acc, num) => {
  if (acc.indexOf(num) == -1) {
    acc.push(num);
  }
  return acc;
}, []); // CODEA LA SOLUCIÓN  !acc.includes(num)
console.log(sinRepetidos);
// debería mostrar [ 5, 1, 7, 12, 2, 9, 0, 11 ]

// Ejercicio 6
// Teniendo un Arreglo llamado notasDeTPs(con números del 1 al 10), usá .reduce() para calcular la nota promedio final de todos los trabajos prácticos de este curso.
let notasDeTPs = [4, 7, 8, 5, 10];
let notaFinal =
  notasDeTPs.reduce((acc, num) => {
    return (acc += num);
  }) / notasDeTPs.length; // CODEA LA SOLUCIÓN
console.log(notaFinal);
// debería mostrar 6.8
