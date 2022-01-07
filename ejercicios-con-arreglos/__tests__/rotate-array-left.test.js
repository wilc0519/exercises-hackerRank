const rotarArregloALaIzquierda = require('../rotate-array-left')


test(`Dado un arreglo [1,2,3,4,5] al rotar a la izquierda 4 veces
 se espera [5, 1, 2, 3, 4]`, ()=>{
     const arreglo = [1,2,3,4,5]
     const numeroDeRotaciones = 4
     const arregloRotadoALaIzquierda = rotarArregloALaIzquierda(arreglo, numeroDeRotaciones)

     expect(arregloRotadoALaIzquierda).toEqual([5, 1, 2, 3, 4])
 })

 test(`Dado un arreglo [1,2,3,4,5] al rotar a la izquierda 2 veces
 se espera [5, 1, 2, 3, 4]`, ()=>{
     const arreglo = [1,2,3,4,5]
     const numeroDeRotaciones = 2
     const arregloRotadoALaIzquierda = rotarArregloALaIzquierda(arreglo, numeroDeRotaciones)

     expect(arregloRotadoALaIzquierda).toEqual([3, 4, 5, 1, 2])
 })


 test(`Dado un arreglo [1,2,3,4,5,6,7,8,9] al rotar a la izquierda 5 veces
 se espera [6,7,8,9,1,2,3,4,5]`, ()=>{
     const arreglo = [1,2,3,4,5,6,7,8,9]
     const numeroDeRotaciones = 5
     const arregloRotadoALaIzquierda = rotarArregloALaIzquierda(arreglo, numeroDeRotaciones)

     expect(arregloRotadoALaIzquierda).toEqual([6,7,8,9,1,2,3,4,5])
 })