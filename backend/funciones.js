//Ejemplo
//Definir una funcion mediante la syntaxis: Declaracion de funcion
function saludo(nombre){
    console.log(`Hola ${nombre}. ¿Como Estas?`)
}
//Invocar, Llamar, Ejecutar saludo
saludo("Pablo")//-> Argumento: Pablo


//Syntaxis expresion funcion:
//Seasigna a una constante
const saludo2 = function(nombre = "Paula"){//-> Parametros por defecto
    console.log(`Hola ${nombre}. ¿Como Estas?`)
}
//Invocar saludo2
saludo2()
