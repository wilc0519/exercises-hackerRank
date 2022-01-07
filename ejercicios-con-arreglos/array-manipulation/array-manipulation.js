const obtenerValorMaximo = (arreglo, numeroDeElementosDelArrayResultante) => {
    const arrayResultante =[]
    
    for (let index = 0; index < numeroDeElementosDelArrayResultante; index++) {
        const valor = 0
        arrayResultante.push(valor)
    }
    arreglo.forEach(element => {
        for (let posicionInicial = element[0]-1; posicionInicial < element[1]; posicionInicial++) { 
            arrayResultante[posicionInicial] = arrayResultante[posicionInicial]+element[2]
        }
        
    });

    const valorMaximo = Math.max(...arrayResultante) 
   return valorMaximo

}

module.exports = obtenerValorMaximo