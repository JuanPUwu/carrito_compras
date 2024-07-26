//definir un arreglo de nombres de producto
const nombres = ["Lapiz HB", "Marcador", "Borrador"]
console.table(nombres)

//acceder a elementos individuales de una lista
console.log(nombres[2])

//agregar elementos a un arreglo
nombres[3] = "Micropunta"
console.table(nombres)

//agregar un elemento al final
nombres.push("Corrector")
console.table(nombres)

//agregar elmento al principio
nombres.unshift("Esfero")
console.table(nombres)

//eliminar elementos
delete nombres[3]
console.table(nombres)

//eliminar el ultimo elemento
nombres.pop()
console.table(nombres)

//eliminar el primero
nombres.shift()
console.table(nombres)

for(let i = 0 ; i < nombres.length ; i ++ ){
    console.log(nombres[i])
}

//operador spread con arreglos:
const nombres2 = [
    "Transportador",
    "Regla 30cm",
    "Cinta Transparente"
]

let productos = [...nombres, ...nombres2]
const elemento = "Compas"
productos = [...productos, elemento]
const transportador = "Transportador"
productos = [...productos, transportador]

console.log(productos)