let numeroSecreto = 44;
let preg = Number.parseInt(prompt("Cual es el numero secreto??"));

if (preg === numeroSecreto) {
  alert("adivinaste el numero, Que suerte!");
} else {
  alert("No adivinaste el numero pero...");
  if (preg > numeroSecreto) {
    alert("Tu numero ingresado es mayor al numero secreto");
  } else if (preg < numeroSecreto) {
    alert("Tu numero ingresado es menor al numero secreto");
  }
}
