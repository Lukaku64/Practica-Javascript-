// ¿Qué Es La Serie Fibonacci?
// La sucesión de Fibonacci comienza con los números 0 y 1. A partir de estos, «cada término es la suma de los dos anteriores». Por ejemplo, los primeros diez números de la serie son:
// 0,1,1,2,3,5,8,13,21,34
// 0 + 1 = 1;
// 1 + 2 = 3
// 3 + 5 = 8
// ¡Y así, sucesivamente, la serie seguirá realizando
// la suma de los últimos dos números!

// Ejercicio
// En este ejercicio deberás escribir una Función que acepte un número X (que indica la posición) y que devuelva otro número (el que se encuentra en esa posición) en la serie de Fibonacci.
// En otras palabras, imprimirá el número que está en la posición contando X cantidad de lugares.

// Serie: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…

//Con funciones
// const Fibonacci = (num) => {
//   let i = num;
//   let resultado = 0;
//   let siguiente = 1;
//   while (i > 1) {
//     siguiente = siguiente + resultado;
//     resultado = siguiente - resultado;
//     i--;
//   }
//   return resultado;
// };
//Con Arreglos
const Fibonacci = (num) => {
  const fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(Fibonacci(2)); // 1
console.log(Fibonacci(5)); // 3
console.log(Fibonacci(8)); // 13
