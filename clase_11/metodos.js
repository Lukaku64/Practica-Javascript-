// Array Methods

// push()
// agrega un elemento al final del arreglo, hay que especificar
let array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array);
// pop()
// elimina un elemento al final del arreglo, no hace falta especificar
array.pop();
console.log(array);
// Los métodos unshift() y shift(), agregan y quitan elementos al comienzo del Arreglo.
array.unshift(0);
console.log(array);
array.shift();
console.log(array);

//El método indexOf() verifica la posición de un elemento dentro de un Arreglo y nos devuelve su Índice
console.log(array.indexOf(3));
console.log("--------------");

//El método slice() se usa para generar una copia de un Arreglo. Esto sirve para trabajar sobre el clon del Arreglo sin afectar su original
//Los Argumentos Del Método slice()
// .slice(): Si el Argumento queda vacío, slice copia el Arreglo entero. Debemos guardar ese valor en una Variable.
// .slice(argumento1): Clona el Arreglo desde el Índice pasado como Argumento (en este caso, argumento 1) y lo clona desde ese elemento inclusive hasta el último.
// .slice(argumento1, argumento2): Clona el Arreglo desde el Índice pasado como primer Argumento (argumento 1), lo selecciona, y clona desde ese Índice hasta el segundo Argumento (argumento2), sin incluirlo.

let array0 = [2, 4, 6, 8, 10];
let arrayNew0 = array0.slice(1, 3);
console.log(array0);
console.log(arrayNew0);
console.log("--------------");

//El método .splice() elimina de un Arreglo una cantidad de elementos a partir de una posición dada
// En este método, el argumento1 determinará el Índice a partir del cual quiero remover los elementos (incluyendo esa posición). Por su parte, el argumento2 establecerá la cantidad de elementos que quiero remover.
// adenas contiene un tercer argumento en el cual indicaremos el nuevo elemento a incorporar

let array1 = [2, 4, 6, 8, 10];
console.log(array1);
let arrayNew1 = array1.splice(1, 3);
let arrayTercerElemento = array1.splice(1, 0, 5);
console.log(array1);
console.log(arrayNew1);
console.log("--------------");

// split()
// este metodo permite transformar un string en un array, señalandole donde sera el corte
let string = "uno dos tres";
let arr = string.split(" ");
console.log(string);
console.log(arr);

// join()
// este metodo permite unir cada elemento de un array
let stringEspacios = arr.join(" ");
let stringY = arr.join(" y ");
console.log(stringEspacios);
console.log(stringY);
console.log("--------------");

//El metodo .filter() retorna un nuevo Arreglo, con los datos filtrados según una Función que le pasamos por Parámetro
// no modifca al array original
let notas = [1, 2, 3, 4, 10, 7, 6, 4, 8];
let aprobadas = notas.filter((nota) => nota >= 6);
console.log(notas);
console.log(aprobadas);
