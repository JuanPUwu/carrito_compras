//alert("Hola")
const nombreProducto = String("Asus Tuf")
console.log(`El producto es: ${nombreProducto}`)

const precioProducto = 13000
const precioProductostr = "13000"
console.log(typeof precioProducto)
console.log(typeof precioProductostr)

console.log(typeof precioProducto !== precioProductostr)

//objeto producto:
//objeto literal:
const producto1 = {
    nombre : "Lenovo ThinkPad",
    color : "Negro",
    modelo : "IU643",
    descripcion : "Laptop para trabajo liviano",
    precio : 2300000,
    getModelo : function(){
        console.log(this.modelo)
    }
}
//acceder a las propiedades individaules del objeto
console.log(producto1["nombre"])

//invocar un metodo get modelo
producto1.getModelo()

//sin desestructuracion
nombresito = producto1.nombre
console.log(nombresito)

//con desestructuracion
const {descripcion, precio} = producto1
console.log(descripcion, precio)

//object constructor
const producto = function(nombre, color, precio){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
}

//2 instancias de producto
const p1 = new producto("Lapiz HB", "Azul", 2300)
console.log(p1)

//operador spread
const medidas = {
    "Peso" : "50kg",
    "Altura" : "1m",
    "largo" : "50cm"
}

const nuevoProducto = {...producto1, ...medidas}
console.log(nuevoProducto)