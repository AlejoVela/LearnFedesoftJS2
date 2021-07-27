// Fechas 

let fecha = new Date();

let anio = fecha.getFullYear(); 
//el mes empieza a contar desde cero, por ello siempre agregramos + 1
let mes = fecha.getMonth() + 1; 
//getDay()  Nos obtiene el número del día de la semana
let dia = fecha.getDate(); 
let hora = fecha.getHours() + ":" + fecha.getMinutes();

console.log(fecha);
console.log(anio + "/" + mes + "/" + dia + ":" + hora);
