const obtenerValorMaximo = require("../array-manipulation")

test(`dado el arreglo [[1,3,5], [4,8,7], [6,9,1]] despues de las operaciones se espera
que el valor maximo del array resultante sea igual a 10` ,() => {

    const numberOfElementOfResultingArray = 10
    const arreglo = [[1,5,3], [4,8,7], [6,9,1]]

    const maximumValue = obtenerValorMaximo(arreglo, numberOfElementOfResultingArray)

    expect(maximumValue).toEqual(10)
})