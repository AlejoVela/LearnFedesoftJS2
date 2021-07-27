// Fechas 
let fecha = new Date();

let anio = fecha.getFullYear(); 
//el mes empieza a contar desde cero, por ello siempre agregramos + 1
let mes = fecha.getMonth() + 1; 
//getDay()  Nos obtiene el número del día de la semana
let dia = fecha.getDate(); 
let hora = fecha.getHours() + ":" + fecha.getMinutes();

//let formatoFecha = anio + "/" + mes + "/" + dia + "  " + hora;
//las comillas acostadas `` puden recibir internamente variables
let formatoFecha = `El día es ${dia} del ${mes} del año ${anio} y la hora actual es ${hora}`;

console.log(fecha);
console.log(formatoFecha);
