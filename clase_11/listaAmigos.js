// En este ejercicio deberás crear un Arreglo con 5 amigos. Dos de ellos, deben repetirse.
// Luego:
// Escribí un código que chequee si tenés algun amigo llamado Félix.
// Si es así, deberá mostrar un mensaje que diga: "Tengo un amigo que se llama Félix", sino: "Sería bueno tener un amigo que se llame Félix".
// Transformá tu código en una Función que reciba como Argumento cualquier nombre y verifique si tenés ese amigo o no (repitiendo las mismas frases que en el punto anterior).

let listaFriends = ["Juan", "Lucas", "Felix", "Federico", "Juan"]
const verifiqueAmigos = (nombre) => {
    for(let i = 0; i < listaFriends.length; i++ ){
        if(listaFriends[i] == nombre) {
            console.log(`Tengo un amigo que se llama ${nombre}`); 
        }
        if(listaFriends.indexOf(nombre) == -1){
            console.log(`Seria bueno tener un amigo que se llame ${nombre}`)  
            i+=4  
        }
    }
}
//Seria bueno encontrar otra forma de hacerlo al ejercicio
verifiqueAmigos("Lucas")
verifiqueAmigos("Roberto")
verifiqueAmigos("Federico")
console.log(listaFriends.indexOf("Felix"));