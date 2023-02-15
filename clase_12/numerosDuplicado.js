let numeros = [2, 4, 5, 37, 0];
let numeros_duplicados = {};
// Después debería quedar así { 0: 0, 2: 4, 4: 8, 5: 10, 37: 74}
// Recorré el Arreglo numeros y poné cada número (2, 4, 5, 37, 0)
// como una Propiedad del Objeto numeros_duplicados. El Valor de cada Propiedad deberá ser ese número multiplicado por dos.
// for (let i = 0; i < numeros.length; i++) {
//   numeros_duplicados[numeros[i]] = numeros[i] * 2;
// }

numeros.forEach((element) => {
  numeros_duplicados[element] = element * 2;
});
console.log(numeros_duplicados);
