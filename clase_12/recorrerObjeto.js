// Podemos recorrer un Objeto con un nuevo tipo de loop que se llama for...in.

let nuevaHeroina = {
  nombreAvenger: "capitana marvel",
  nombreHumano: "carol danvers",
  poder: "ser archi fuerte y volar por el espacio",
};
// Los Objetos, a diferencia de los Arreglos, tienen Propiedades sin un orden numérico.
// Por eso, para recorrer un Arreglo podíamos usar forLoop mientras que, con los Objetos, usaremos for...in.

for (let propiedad in nuevaHeroina) {
  console.log(nuevaHeroina[propiedad]);
}
