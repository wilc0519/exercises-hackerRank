const calculateNumberOfBribesOrChaos = (positions) => {
    let numberOfBribes = 0
    for (let i = 0; i < positions.length; i++) {
        if (positions[i] - (i + 1) > 2) {
            return 'To chaotic'
        }
        for (let j = i+1; j < positions.length; j++) {
            if (positions[i] > positions[j]) {
                numberOfBribes++
            }
        }
    }
    return numberOfBribes
}

const tranformerStringToArrayOfNumbers = (numberAsString) => {
   return numberAsString.split(' ').map(number => Number(number))

}

module.exports = {calculateNumberOfBribesOrChaos,
tranformerStringToArrayOfNumbers
}
