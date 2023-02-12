// En este ejercicio deberás ordenar el poema del Martín Fierro. En una parte dice:
// "Los hermanos sean unidos porque ésa es la ley primera, tengan unión verdadera, en cualquier tiempo que sea, porque si entre ellos se pelean los devoran los de ajuera"
let poemaDesordenado =
  "los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran de ajuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos";
let arregloDesordenado = poemaDesordenado.split(" ");
console.log(arregloDesordenado);
let arregloOrdenado = [];
console.log(arregloDesordenado.length);
//Tuve problema con el for, con su incrementador i++, me daban distinto largo de array
for (let i = 0; arregloDesordenado.length > i; i + 2) {
  arregloOrdenado.push(arregloDesordenado.shift());
  arregloOrdenado.push(arregloDesordenado.pop());
}
// con While:
// while (arregloDesordenado.length > 0) {
//   arregloOrdenado.push(arregloDesordenado.shift());
//   arregloOrdenado.push(arregloDesordenado.pop());
// }

console.log(arregloOrdenado.length);
console.log(arregloOrdenado);

let poemaOrdenado = arregloOrdenado.join(" ");
console.log(poemaOrdenado);
