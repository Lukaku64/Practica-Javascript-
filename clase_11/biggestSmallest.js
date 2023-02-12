// En este ejercicio deberás:
// 1- Escribir una Función llamada biggest_smallest que tenga un Argumento (que haga referencia a un Arreglo de números).
// 2- Utilizar el método forEach() para encontar el número más grande y el número más chico.
// 3- La función debe devolver por consola un Arreglo que contenga los números mínimo y máximo.
const biggest_smallest = (arr) => {
  let max = arr[0];
  let min = arr[0];
  arr.forEach((num) => {
    if (num > max) return (max = num);
    if (num < min) return (min = num);
  });
  console.log(min, max);
};

//Explicacion de biggest_smallest:
// En la primera iteración, el valor de num es igual a arr[0], que es 111. El valor de max y min se inicializaron con numeros[0], por lo que ambos valen 111.
// En la segunda iteración, el valor de num es igual a arr[1], que es 27. Se compara num con max y se encuentra que es menor, por lo que max seguira teniendo 111. Se compara num con min y se encuentra que es menor, por lo que min ahora vale 27
biggest_smallest([111, 27, 31, 44, 101, 213, 33, 58]);
// Salida: 27, 213
