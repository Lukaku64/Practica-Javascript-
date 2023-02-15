// En este ejercicio, deberás crear un Arreglo llamado películas, que tenga -por cada película- un Objeto con las siguientes Propiedades:
// titulo
// rating
// loHasVisto
// Usá un for loop para iterar sobre el Arreglo e imprimir un resultado en la consola que se vea como esto:

let peliculas = [
  { loHasVisto: "Viste", titulo: "Busqueda implacable", rating: "5 estrellas" },
  { loHasVisto: "No Viste", titulo: "Norbit", rating: "3 estrellas" },
  { loHasVisto: "Viste", titulo: "Mini espias", rating: "2 estrellas" },
  { loHasVisto: "No Viste", titulo: "La vida es bella", rating: "5 estrellas" },
];
// for (let i = 0; i < peliculas.length; i++) {
//   console.log(
//     `${peliculas[i].loHasVisto}  "${peliculas[i].titulo}"  ${peliculas[i].rating}`
//   );
// }

peliculas.forEach((Element) => {
  console.log(`${Element.loHasVisto}  "${Element.titulo}"  ${Element.rating}`);
});

// Viste "Busqueda implacable" - 5 estrellas
// No viste "Norbit" - 3 estrellas
// Viste "Mini espías" - 2 estrellas
// No viste "La vida es bella" - 5 estrellas
