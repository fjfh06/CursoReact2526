import React from 'react'

/**
 * 1. Crear una interfaz llamada Producto que tenga id, nombre, precio, diponible y (opcional) categoría. 
 * 2. Una función llamada calcular total
 * que reciba un array de tipo producto y retorne un número (que sea la suma de todos los precios de los productos disponibles)
 * 3. Crea un array de productos con almenos 3 productos diferentes 
 * 4. Prueba la función 
 */

interface Producto {
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
    categoria?: string;
}


const calcularTotal = (productos: Producto[]): number => {
    let total = 0;
    productos.filter(producto => producto.disponible)
    .forEach(producto => total += producto.precio);
    
    return total;
}

const productos: Producto[] = [
    { id: 1, nombre: "Monitor", precio: 100, disponible: true },
    { id: 2, nombre: "Ratón", precio: 25, disponible: true },
    { id: 4, nombre: "Abrigo", precio: 80, disponible: true, categoria: "Ropa" },
    { id: 3, nombre: "Teclado", precio: 30, disponible: false },
    { id: 5, nombre: "Camiseta", precio: 20, disponible: true, categoria: "Ropa" },
]

console.log(calcularTotal(productos));

const Ejercicio1 = () => {
  return (
    <div>Ejercicio1</div>
  )
}

export default Ejercicio1