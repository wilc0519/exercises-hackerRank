const calcularNumeroDeSobornosOCaos = (posiciones) => {
    let numeroDeSobornos = 0
    for (let i = 0; i < posiciones.length; i++) {
        if (posiciones[i] - (i + 1) > 2) {
            return 'Caótico'
        }
        for (let j = i+1; j < posiciones.length; j++) {
            if (posiciones[i] > posiciones[j]) {
                numeroDeSobornos++
            }
        }
    }
    return numeroDeSobornos
}

const tranformerStringToArrayOfNumbers = (numberAsString) => {
   return numberAsString.split(' ').map(number => Number(number))

}

module.exports = {calcularNumeroDeSobornosOCaos,
tranformerStringToArrayOfNumbers
}
