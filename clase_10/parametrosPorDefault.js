//En este ejercicio deberás agregar Parámetros por default a la Función, 
// para que al ejecutarla no devuelva ningún error.
const longitudDelNombre = (nombre = "") => nombre.length

console.log( longitudDelNombre() ); // 0
console.log( longitudDelNombre('Ana') ); // 3

//En este ejercicio deberás refactorizar la Función para obtener el mismo resultado usando un código más reducido.
// const saludarVisitanteWeb = (nombreUsuario) => {
//     if (nombreUsuario === undefined) {
//       return '¡Hola, anónimo!';
//     } else {
//       return `¡Hola, ${nombreUsuario}!`;
//     }
//    }
// const saludarVisitanteWeb = (nombreUsuario) => {
//     if (nombreUsuario === undefined) return "¡Hola, anónimo!"
//     if (nombreUsuario !== undefined) return  `¡Hola, ${nombreUsuario}!`
//    }

const saludarVisitanteWeb = (nombreUsuario = "anónimo") => {
    if(nombreUsuario !== undefined) return `¡Hola, ${nombreUsuario}!`
}
// Me gustaria hacer otro ejemplo, pero con operador ternario

   console.log( saludarVisitanteWeb() ); // ¡Hola, anónimo!
   console.log( saludarVisitanteWeb('José') ); // ¡Hola, José!

