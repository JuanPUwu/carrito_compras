const carrito = [
    {
        nombre : "HP Victus",
        descripcion : "Laptop Gamer",
        tipoProducto : "Computador Portatil",
        modelo : "HPV9",
        precio : {
            minimoVenta : 3000000,
            compra : 1000000
        },
        caracteristicas : {
            dimensiones : {
                alto : 2,
                ancho : 50,
                largo : 30
            },
            fabricacion : {
                pais : "Taiwán",
                fecha : new Date('2020-05-18')
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }
    },
    {
        nombre : "KZ ZSN Pro",
        descripcion : "Audifonos de Alta Fidelidad",
        tipoProducto : "Audifonos",
        modelo : "KZG4D",
        precio : {
            minimoVenta : 90000,
            compra : 40000
        },
        caracteristicas : {
            dimensiones : {
                alto : 0.8,
                ancho : 0.5,
                largo : 0.8
            },
            fabricacion : {
                pais : "Japon",
                fecha : new Date('2023-09-23')
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }
    },
    {
        nombre : "RTX 4060",
        descripcion : "Tarjeta Grafica",
        tipoProducto : "Tarjeta de Video",
        modelo : "RTX4060LG100",
        precio : {
            minimoVenta : 1600000,
            compra : 1200000
        },
        caracteristicas : {
            dimensiones : {
                alto : 3,
                ancho : 18,
                largo : 38
            },
            fabricacion : {
                pais : "China",
                fecha : new Date('2023-01-27')
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }
    },
    {
        nombre : "RTX 4080",
        descripcion : "Tarjeta Grafica",
        tipoProducto : "Tarjeta de Video",
        modelo : "RTX4080LG100",
        precio : {
            minimoVenta : 2300000,
            compra : 1800000
        },
        caracteristicas : {
            dimensiones : {
                alto : 3,
                ancho : 18,
                largo : 38
            },
            fabricacion : {
                pais : "India",
                fecha : new Date('2023-01-27')
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }
    },
    {
        nombre : "Armario",
        descripcion : "Armario Ropa",
        tipoProducto : "Hogar",
        modelo : "ARHG2912",
        precio : {
            minimoVenta : 2400000,
            compra : 1600000
        },
        caracteristicas : {
            dimensiones : {
                alto : 220,
                ancho : 18,
                largo : 38
            },
            fabricacion : {
                pais : "USA",
                fecha : new Date('2024-02-27')
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }
    },
    {   
        nombre : "Gomitas Trululu",
        descripcion : "Gomitas Trululu Tortuga",
        tipoProducto : "Alimento",
        modelo : "GMTR2312",
        precio : {
            minimoVenta : 2400,
            compra : 1400
        },
        caracteristicas : {
            dimensiones : {
                alto : 0.1,
                ancho : 6,
                largo : 6
            },
            fabricacion : {
                pais : "USA",
                fecha : new Date('2024-02-27')
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }
    }
]

/*
//Recorrer el carrito de compras con metodo forEach
carrito.forEach(producto => console.log(producto.nombre))

Metodo de transformacion map
let preciosCompra = carrito.map(producto => {
    //Usando condicional
    if(producto.caracteristicas.fabricacion.pais === "Taiwán")
        console.log(producto.nombre)
    return producto.precio.compra
})

console.log(preciosCompra)

//Ejecutar el metodo de obtener precio de compra
console.log(carrito[0].obtenerPrecioCompra())

//Impimir nombre de el producto que tenemos
console.log(carrito[0].nombre);

//Imprimir atributo anidado
console.log(carrito[0].precio.compra);
console.log(carrito[0].caracteristicas.dimensiones.alto);

//Filtrer: recorre el elemento buscando elementos que concuerden con la condicional creando un arreglo con los objetos
//que cumplen dicho parametro
let productosTaiwan = carrito.filter((producto) => {
    return producto.caracteristicas.fabricacion.pais === "Taiwán"
})
console.log(productosTaiwan)

//Calculo total del inventario
let total = 0 
carrito.forEach(producto => {
    //Acumular el valor del producto en la variable total
    total += producto.precio.compra
})
console.log(`El Valor del Stock es: ${total}`)


//Usando el metodo reduce: reduce a un solo valor el arreglo, con base en una expresion
carrito.reduce((total, producto) => {
    return total + producto.precio.compra
}, 0)
console.log(`El Valor del Inventario es: ${total}`)
*/

//5.1
carrito.forEach(producto => console.log(producto.nombre, 
                                        producto.tipoProducto, 
                                        producto.modelo,
                                        producto.caracteristicas.dimensiones.largo,
                                        producto.caracteristicas.fabricacion.pais))

//6.1
let total = 0 
carrito.forEach(producto => {
    //Acumular el valor del producto en la variable total
    total += producto.precio.compra
})
console.log(`El Valor del Stock es: ${total}`)

//7.1
let productosChina = carrito.filter((producto) => {
    return producto.caracteristicas.fabricacion.pais === "China"
})
console.log(productosChina)

//7.2
let productos2MetrosLargo = carrito.filter((producto) => {
    return producto.caracteristicas.dimensiones.alto >= 200
})
console.log(productos2MetrosLargo)

//7.3
let productosMenos10K = carrito.filter((producto) => {
    return producto.precio.compra <= 10000
})
console.log(productosMenos10K)