// Usá un for Loop y mostrá cada ítem de listaDeSuper en la consola.
// Refactoreá tu código de manera tal que el for loop viva dentro de una Función que se llame logItems.
// La Función deberá tomar un Arreglo como Parámetro e imprimir sus elementos en la consola.
// Invocá logItems 2 veces, pasando listaDeSuper la primera vez y otro Arreglo la segunda vez (deberás crear uno nuevo).
// Refactoreá el código de logItems para que use .forEach() en vez de un for loop.

let listaDeSuper = [
  "salame",
  "galletas",
  "huevos",
  "burgers",
  "papas",
  "lechuga",
  "pepsi",
];
// const logItems = (arr) => {
//   for (item of arr) {
//     console.log(item);
//   }
// };
const logItems = (arr) => {
  arr.forEach((element) => {
    console.log(element);
  });
};

logItems(listaDeSuper);
logItems(["si", "no", "maybe", "casi", "nose", "so"]);
