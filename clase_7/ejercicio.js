alert("Bienvenidos!");
let nombreUsuario = prompt("¿Cual es tu nombre?");
alert("Gracias por estar " + nombreUsuario);
let edadUsuario = prompt("Me puedes decir tu edad?");
console.log("La edad es de " + edadUsuario);
alert("Gracias " + nombreUsuario + " con " + edadUsuario + " años de edad");

// Mensaje con Vairables
// por una extension con el Prettier me hace salto de linea

let [nombre, edad, cumpleaños, ciudad, ocupacion, pasatiempos] = [
  "Lucas",
  18,
  "9/02",
  "SMT",
  "Estudiante",
  "Programacion",
];
console.log(
  "Soy " +
    nombre +
    " tengo " +
    edad +
    " cumplo años el " +
    cumpleaños +
    " vivo en " +
    ciudad +
    " soy " +
    ocupacion +
    " mi pasatiempo es " +
    pasatiempos
);

// Cantidad de Caracteres

let nombreBreve = prompt("Ingresa un texto breve");
console.log(nombreBreve.length);

// Calculadora de Edad

let edadCalculadora = prompt("Dime de vuelta tu edad");
let resDiasDeEdad = edadCalculadora * 365;
alert(
  "Gracias tus " +
    edadCalculadora +
    " años en dias serian un total de " +
    resDiasDeEdad
);
alert("Gracias");

// Suma de Valores

let num1 = parseInt(prompt("Dime un numero"));
let num2 = parseInt(prompt("Dime otro numero"));
let resultado = num1 + num2;
console.log(resultado);
alert("Hemos sumado los valores que ingresaste, ve a la consola");
