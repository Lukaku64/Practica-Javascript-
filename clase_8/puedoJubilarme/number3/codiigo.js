let genero = prompt("Elige tu genero; M para masculino, F para femenino");
let edad = prompt("Dime tu edad!");

// Como hice el ejercicio anterior

// if (genero == "M") {
//   if (edad >= 65) {
//     alert("Si puedes Jubilarte");
//   } else {
//     alert("No puedes Jubilarte");
//   }
// } else if (genero == "F") {
//   if (edad >= 60) {
//     alert("Si puedes Jubilarte");
//   } else {
//     alert("No puedes Jubilarte");
//   }
// } else {
//   alert("Dale loco, epecificame un genero");
// }

//Con un solo If

// if ((genero == "M" && edad >= 65) || (genero == "F" && edad >= 60)) {
//   alert("Si puedes Jubilarte");
// } else {
//   alert("No puedes Jubilarte");
// }

// Como operador ternario

(genero == "M" && edad >= 65) || (genero == "F" && edad >= 60)
  ? alert("Si puedes Jubilarte")
  : alert("No puedes Jubilarte");
