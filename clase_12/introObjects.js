// Sintaxís de los objetos
let objeto = {
  clave1: "Valor1", // Las propiedades se escriben en formato key-value pair (en castellano, par clave-valor) y se separan con comas. El valor de cada clave puede ser cualquier tipo de dato, inclusive otros Objetos, Arreglos o Funciones.
  clave2: "Valor2",
  clave3: "Valor3",
  "4clave": "Valor4",
  "clave 5": "Valor5",
};

// Los Objetos tienen Propiedades que se escriben en formato key-value pairs. Es decir, cada ítem viene de a pares.

// la forma de acceder a cada propiedad es con:

// Bracket Notation

console.log(objeto[clave1]);
console.log(objeto["clave3"]);
console.log(objeto["clave 5"]);

// Dot Notation -- no deja mutar Variable, ni con numeros, ni con espacios

console.log(objeto.clave1);
// console.log(objeto.4clave);
// console.log(objeto.clave 5);
