// Creá una Variable llamada miAuto y asignale un Objeto vacío.
// Asignale a miAuto una Propiedad marca, que a su vez contenga un String.
// Agregá una Propiedad año que contenga un número entero.
// Agregá una Propiedad nuevo que contenga un booleano.
// Creá una Variable llamada propertyKey y asignale el String "modelo"
// Agregá la Propiedad modelo al Objeto miAuto.
// Creá una Variable llamada anotherPropertyKey y dale el Valor "precio".
// Cuantificá el Valor de tu auto.
// Asigná la String "color" a una Variable nueva llamada nextProperty.
// Usá la variable nextProperty para añadir el color a tu auto.
// Usá el loop for...in para iterar sobre el Objeto miAuto y que muestre en la consola el key y el value de cada Propiedad.

let miAuto = {};
miAuto.marca = "Renault";
miAuto.año = 2007;
miAuto.nuevo = true;
let propertyKey = "modelo";
miAuto.propertyKey = "AMG";
let anotherPropertyKey = "precio";
miAuto.anotherPropertyKey = "$20000usd";
let nextProperty = "color";
miAuto.nextProperty = "negro";

for (let prop in miAuto) {
  console.log(miAuto[prop]);
}

console.log(miAuto[propertyKey]);
console.log(miAuto["modelo"]);
