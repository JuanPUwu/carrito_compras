//Sytaxis funcion flecha
    /* REGLAS
    1. Si el bloque de codio de la funcion flecha solo tiene una linea no hace falta ponerle los "{}"
    2. Si la funcion flecha tiene un solo parametro se puede omitir el parentesis 
    3. Si el bloque de codigo de la funcion flecha solo tiene una linea y esta linea debe retornar 
    un valor es posible omitir el return
    */
const saludo = nombre => `Hola ${nombre} desde una funcion flecha`

//Invocar funcion flecha
console.log(saludo("Pablo"));