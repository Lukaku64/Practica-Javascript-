let arr = [1, 2, 3, 4, 5];
// arr.forEach((num) => num * 2);
let doubled = arr.map((num) => {
  return num * 2;
});
console.log(doubled);
// [2, 4, 6, 8, 10]

arr.forEach((num, index) => {
  return (arr[index] = num * 2);
});
console.log(arr);
// [2, 4, 6, 8, 10]
// el map no modifica el array original mientras que forEach si

// El método .reduce() nos permite recorrer el arreglo y obtener un resultado reducido en base a cada elemento del arreglo.

let notas = [1, 2, 3, 4, 10, 5];
let sumaDeNotas = notas.reduce((total, nota) => total + nota, 0);
// const sumaDeNotas = notas.reduce(function(total, nota) {
//  return total + nota;
// }, 0);
console.log(sumaDeNotas); // 25
//
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let pares = numeros.reduce((acc, numero) => {
  if (numero % 2 == 0) {
    acc.push(numero);
  }
  return acc;
}, []);
console.log(pares); // [ 2, 4, 6, 8 ]
