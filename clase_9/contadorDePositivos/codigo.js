let numero;
let postivos = 0;
while (!(numero = parseInt(prompt("Dime un numero entero")) < 0)) {
  postivos++;
}

alert("Ingresaste " + postivos + " numeros positivos ");
