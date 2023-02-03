// let valorUser = parseInt(prompt("Ingrese un numero del 1 al 10"));
// let getRandom = Math.floor(Math.random() * (valorUser - 1) + 1);
// let numberRandom = parseInt(prompt("Indica que numero salio al azar"));
// let i = true;
// let j = 0;
// while (i) {
//   if (getRandom === numberRandom) {
//     alert(`Bien acertaste!, te costo ${j} acertar`);
//     i = false;
//   } else if (numberRandom > getRandom) {
//     alert("El numero Random es menor a tu prediccion ");
//   } else if (numberRandom < getRandom) {
//     alert("El numero Random es mayor a tu prediccion");
//   }
//   i = true;
//   j++;
// }

let valorUser = parseInt(prompt("Ingrese un numero del 1 al 10"));
let getRandom = Math.floor(Math.random() * (valorUser - 1) + 1);
let numberRandom;
let j = 0;
while (numberRandom != getRandom) {
  numberRandom = parseInt(prompt("Indica que numero salio al azar"));
  if (numberRandom > getRandom) {
    alert("Tu predic es mayor al numero Random");
  } else if (numberRandom < getRandom) {
    alert("Tu predic es menor al numero Random");
  }
  j++;
}

alert(`Bien acertaste!, te costo ${j} veces acertar`);

//El problema estaba en poner el numberRandom adentro del While
