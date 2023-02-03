let num = 2;

// que ejecute siempre su bloque de codigo
// if (true) {
//   console.log("Si  }
// }

// que nunca ejecute su bloque de codigo
// if (false) {
//   console.log("No");
// }

// 3
if (true) {
  let pregunta = prompt("Como estas?");
  if (pregunta == "triste") {
    console.log("Dale pibe no estes triste");
  }
}

//4
if (true) {
  let num = prompt("Cual es el numero secreto?");
  if (num == 43) {
    console.log("Good, it is the secret number");
  } else {
    alert("Estas equivocado con el numero secreto!");
  }
}

//5
if (true) {
  let password = prompt("Ingresa la contraseña!");
  if (password === "22ef") {
    window.location = "http://www.google.com";
  }
}
