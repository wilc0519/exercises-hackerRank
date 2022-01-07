const rotarArregloALaIzquierda = (arreglo, numeroDeRotaciones) =>{
    for (let rotacion = 0; rotacion < numeroDeRotaciones; rotacion++) {
        arreglo.push(arreglo[0])
        arreglo.shift()   
    }
    return arreglo
}

module.exports = rotarArregloALaIzquierda