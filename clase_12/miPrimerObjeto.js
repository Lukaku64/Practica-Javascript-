// En este ejercicio deberás crear un Objeto y acceder a los valores utilizando los métodos aprendidos hasta ahora.
// Parte 1
// Creá un Objeto nave con las siguientes Propiedades y Valores:
// Tipo de nave: Un String que diga "Espacial".
// País: Un String que indique de qué país es la nave.
// Cantidad de tripulantes: Un número que indique la cantidad de tripulantes de la nave.
// Tripulantes: Un Arreglo con los nombres de los tripulantes.
// Estado: Un String que diga "Usada".
// Despegar:
// a) Una Función que imprima en la consola el siguiente mensaje:
// "🚀 ¡Todo listo para el despegue! 👍
// Oh no ... 😱 ¡algo se rompió!"
// b) Y tire un Alert que diga: 🔥 ¡BOOOOOOM! 🔥
// Parte 2
// Ahora desde la consola seguí este paso a paso para extraer los valores del Objeto nave:
// Extraé el país de la nave usando Dot notation.
// Extraé el tipo de nave usando Bracket notation.
// Extraé la cantidad de tripulantes usando Dot notation... ¿se puede?

let nave = {
  tipoNave: "Espacial",
  pais: "Gomorra",
  cantidadTripulantes: 4,
  tripulantes: ["Amado", "Juan", "Luis", "Ezequiel", "Lucia"],
  estado: "Usada",
  despegar: function () {
    console.log("🚀 ¡Todo listo para el despegue!");
    console.log("Oh no ... 😱 ¡algo se rompió!");
    console.log("🔥 ¡BOOOOOOM! 🔥");
  },
};

console.log(nave.pais);
console.log(nave["tipoNave"]);
console.log(nave.cantidadTripulantes);
console.log(nave.despegar());

// Modificar Objetos Vacíos
// Hasta ahora vimos que podemos crear Objetos escribiéndolos directamente. También podemos inicializar un Objeto vacío y agregar nuevas Propiedades. Para eso, hay que:

// Crear una Variable (por ejemplo, let perro).
// Crear el Objeto vacío (a través de las llaves "{}") y asignarlo a la Variable recién creada.
// Agregar nuevas Propiedades.
let perro = {};
perro.nombre = "Firulais";
perro["edad"] = 3;
perro["ladrar"] = function () {
  alert("GUAU!");
};
perro.ladrar(); // GUAU!
perro["juguetes"] = ["hueso", "pelota", "peluche"];
