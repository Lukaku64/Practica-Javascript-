// Tenés una lista de estudiantes con su desempeño académico actual.
// Querés subirle 2 puntos a aquellos que su nota sea mayor a 5. Recordá que la nota tampoco puede superar al 10.
let notas = [
  { Estudiante: "Juan", nota: 6 },
  { Estudiante: "Mario", nota: 8 },
  { Estudiante: "Julia", nota: 10 },
  { Estudiante: "Sofia", nota: 2 },
];

console.log(notas);

// for (let i = 0; i < notas.length; i++) {
//   if (notas[i].nota >= 5 && notas[i].nota < 9) {
//     notas[i].nota += 2;
//     console.log(notas[i].nota);
//   }
// }

const estudiantes = (array) => {
  array.forEach((element) => {
    if (element.nota >= 5 && element.nota < 9) {
      element.nota += 2;
      console.log(element.nota);
    }
  });
};
console.log(estudiantes(notas));
console.log(notas);
