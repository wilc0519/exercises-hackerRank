const getTheMaximumValue = (queries, numberOfElementOfResultingArray) => {
    const resultingArray =[]
    
    for (let index = 0; index < numberOfElementOfResultingArray; index++) {
        const valor = 0
        resultingArray.push(valor)
    }
    queries.forEach(element => {
        for (let position = element[0]-1; position < element[1]; position++) { 
            resultingArray[position] = resultingArray[position]+element[2]
        }
        
    });

    const valorMaximo = Math.max(...resultingArray) 
   return valorMaximo

}

module.exports = getTheMaximumValue