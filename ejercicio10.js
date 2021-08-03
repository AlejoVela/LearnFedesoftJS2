//JSON - Objetos
//esto es un objeto, no es un json puro
//esto debe cifrarce al ser enviado al backend
let usuario = {
    nombre : "pepa",
    edad : 40,
    documento : "1234567",
    suedo: 125.5,
    casado : false,
    user : "pepa2121",
    pass: "1234",
    //json permite realizar funciones pero esto es una muy mala practica
    mensaje(){
        return aler();
    }
}

console.log(usuario);