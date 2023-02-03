// console.log(preg);
// console.log(ppt);

// if (preg == ppt) {
//   alert("Fue un empate");
// }

// // Para Tijera
// if (preg == "tijera") {
//   if (ppt == 2) {
//     alert("Ganaste, El rival elijio Papel");
//   } else if (ppt == 1) {
//     alert("Pediste, El rival elijio Piedra");
//   }
// }

// // Para Papel
// if (preg == "papel") {
//   if (ppt == 1) {
//     alert("Ganaste, El rival elijio Piedra");
//   } else if (ppt == 3) {
//     alert("Perdiste, El rival elijio Tijera");
//   }
// }

// //Para Piedra
// if (preg == "piedra") {
//   if (ppt == 3) {
//     alert("Ganaste, El rival elijio Tijera");
//   } else if (ppt == 2) {
//     alert("Perdiste, El rival elijio Papel");
//   }
// }
let preg;
let ppt;
let yesOrNot = "si";
while (yesOrNot == "si") {
  preg = prompt("Elije 1 para Piedra, 2 para Papel o 3 para Tijera");

  ppt = Math.ceil(Math.random() * 3);

  //Tijera
  if (preg == "tijera" && ppt == 3) {
    alert("Empate");
  } else if (preg == "tijera" && ppt == 2) {
    alert("Ganaste, El rival elijio Papel");
  } else if (preg == "tijera" && ppt == 1) {
    alert("Pediste, El rival elijio Piedra");
  }

  // Para Papel
  if (preg == "papel" && ppt == 2) {
    alert("Empate");
  } else if (preg == "papel" && ppt == 1) {
    alert("Ganaste, El rival elijio Piedra");
  } else if (preg == "papel" && ppt == 3) {
    alert("Perdiste, El rival elijio Tijera");
  }

  // Para Piedra
  if (preg == "piedra" && ppt == 1) {
    alert("Empate");
  } else if (preg == "piedra" && ppt == 3) {
    alert("Ganaste, El rival elijio Tijera");
  } else if (preg == "piedra" && ppt == 2) {
    alert("Perdiste, El rival elijio Papel");
  }

  yesOrNot = prompt("Juegas ?");
}
