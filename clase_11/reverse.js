//En este ejercicio deberás crear una Función que imprima por consola un Arreglo con sus elementos invertidos, sin modificarlo.
// Luego, deberás hacer una Función que lo modifique e invierta el orden de sus elementos.

let numeros = [1, 2, 3, 4, 5];

const printReverse = (arr) => {
  for (let i = arr.length; i > 0; i--) console.log(i);
};
// Otra forma sin el for pero con metodos:
// const printReverse = (arr) => {
//   arr.slice().reverse().forEach((i) => console.log(i));
// };
// Para obtener los números en orden inverso, primero se utiliza el método slice() para crear una copia del arreglo arr,
// y luego se utiliza el método reverse() para invertir el orden de los elementos.
// Finalmente, se usa forEach() para imprimir cada número en orden inverso

printReverse(numeros);
console.log(numeros);
const reverser = (arr) => {
  arr.reverse();
  console.log(arr);
};
reverser(numeros);
