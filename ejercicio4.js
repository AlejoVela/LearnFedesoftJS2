// Array

let personas = []; // array vacio
let edad = 0;
let nombre = "";

let animales = ["Perro", "Gato", "Serpiente", "Lobo", "Escorpion"]
console.log(animales.length);
console.log(animales);

animales[6] = "Dragon";
animales.push("Ardilla");//coloca al final
animales.unshift("Coyote") //coloca al inicio

animales.splice(5,1)/* Primer parametro elemento a eliminar, segundo parametro numero de elementos a eliminar desde del elemto que se indico en el primer parametro */

for (let i = 0; i < animales.length; i++) {
    const animal = animales[i];
    console.log(`el animal en la posición ${i} es ${animal}`);
}


