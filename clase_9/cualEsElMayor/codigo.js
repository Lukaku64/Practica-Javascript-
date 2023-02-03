// Creo que este codigo esta un poco tosco

let var1 = parseInt(prompt("Dime tu primer Numero"));
let var2 = parseInt(prompt("Dime tu segundo Numero"));
while ((var1 !== 0 || var2 !== 0) && var1 > 0 && var2 > 0) {
  if (var1 == var2) {
    var1 = parseInt(prompt("Ingresa otro primer Numero"));
  } else if (var1 > var2) {
    alert("Tu primer Numero es el mayor");
  } else if (var1 < var2) {
    alert("Tu segundo Numero es el mayor");
  }
  var1 = parseInt(prompt("Dime tu primer Numero"));
  var2 = parseInt(prompt("Dime tu segundo Numero"));
}

// Segunda prueba, el codigo de abajo no funca

// let var1 = parseInt(prompt("Dime tu primer Numero"));
// let var2 = parseInt(prompt("Dime tu segundo Numero"));
// while ((var1 !== 0 || var2 !== 0) && var1 > 0 && var2 > 0) {
//   if (var1 == var2) {
//     alert("Para la proxima ingreas un numero distinto");
//   } else if (var1 > var2) {
//     alert("Tu primer Numero es el mayor");
//   } else if (var1 < var2) {
//     alert("Tu segundo Numero es el mayor");
//   }
//   var1;
//   var2;
// }

//Aqui le quite un poco de codigo basura de la condicion

// let var1 = parseInt(prompt("Dime tu primer Numero"));
// let var2 = parseInt(prompt("Dime tu segundo Numero"));
// while (var1 > 0 && var2 > 0) {
//   if (var1 == var2) {
//     var1 = parseInt(prompt("Ingresa otro primer Numero"));
//   } else if (var1 > var2) {
//     alert("Tu primer Numero es el mayor");
//   } else if (var1 < var2) {
//     alert("Tu segundo Numero es el mayor");
//   }
//   var1 = parseInt(prompt("Dime tu primer Numero"));
//   var2 = parseInt(prompt("Dime tu segundo Numero"));
// }
