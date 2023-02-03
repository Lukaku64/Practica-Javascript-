let i = -10;
while (i <= 19) {
  console.log(i);
  i++;
}
console.log("Pare un poco rey");

let j = 10;
let ji = 40;
while (j <= ji) {
  console.log(j);
  j += 2;
}

console.log("Pare un poco rey");
// let k = 300;
// let ki = 333;
// while ((k % 3 == 0) <= ki) {
//   console.log(k);
//   k++;
// }

// De la misma forma que hay aqui se puede hacer la de numero par

let k = 300;
let ki = 333;
while (k <= ki) {
  if (k % 3 == 0) {
    console.log(k);
  }
  k++;
}

console.log("Pare un poco rey");

// Creo que tiene un pequeño error porque mostraba 50 que no tiene nada que ver con 3

let l = 5;
let li = 50;
while (l <= li) {
  if (l % 5 == 0 && l % 3 == 0) {
    console.log(l);
  }
  l++;
}
