// Iterá actoresPrincipales y llevá a actoresVocales aquellos cuyo nombre o apellido comience con una vocal.
// Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá sus nombres y apellidos al Arreglo actoresPrincipales.
// Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá los nombres de las películas en el Arreglo peliculas.
// Creá un Objeto vacíó llamado peliculaPorActor.
// Agregá Propiedades a este Objeto donde la clave sea el nombre del actor y el valor sea la película.
// Adaptá tu código para que pueda haber más de una película por cada actor.
let actoresVocales = [];
let actoresPrincipales = [
  "Tom Hanks",
  "Johnny Depp",
  "Elizabeth Taylor",
  "Morgan Freeman",
  "Jennifer Aniston",
  "Meryl Streep",
  "Natalie Portman",
  "Ashton Kutcher",
];

actoresPrincipales.forEach((nombre) => {
  const nombreSplit = nombre.split(" ");
  const primerNombre = nombreSplit[0];
  const primerApellido = nombreSplit[1];
  const vocales = ["a", "e", "i", "o", "u"];
  if (
    vocales.includes(primerNombre[0].toLowerCase()) ||
    vocales.includes(primerApellido[0].toLowerCase())
  ) {
    actoresVocales.push(nombre);
  }
});
console.log(actoresVocales);

let peliculas = [];
let actoresPrincipalesPorPelicula = {
  Titanic: "Leonardo DiCaprio",
  "El Padrino": "Al Pacino",
  Matrix: "Keanu Reeves",
  "Iron Man": "Robert Downey Jr",
  "Soy leyenda": "Will Smith",
  "Bastardos sin gloria": "Brad Pitt",
};

for (let prop in actoresPrincipalesPorPelicula) {
  peliculas.push(prop);
  actoresPrincipales.push(actoresPrincipalesPorPelicula[prop]);
}
// peliculas = Object.keys(actoresPrincipalesPorPelicula);
console.log(peliculas);

let peliculaPorActor = {};

for (let i = 0; i < peliculas.length; i++) {
  let values = Object.values(actoresPrincipalesPorPelicula);
  peliculaPorActor[values[i]] = peliculas[i];
}
// for (let propiedad in actoresPrincipalesPorPelicula) {
//   let pelicula = propiedad;
//   let actor = actoresPrincipalesPorPelicula[propiedad];
//   peliculaPorActor[actor] = pelicula;
// }

console.log(peliculaPorActor);
