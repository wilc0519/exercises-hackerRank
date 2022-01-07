
const sortStringAsArrayOfChars = (stringToValidate) => {
    const orderedCharacterArray  = stringToValidate.split('')
        .sort((secondChar, firsthChar) => secondChar.localeCompare(firsthChar)
        )
    return orderedCharacterArray
}

const countNumberOfRepeat = (arrayOrdered) => {
    const numberOfRepetitions = []
    let repetitions = 1
    for (let i = 0; i < arrayOrdered.length; i++) {
        if ((arrayOrdered[i] === arrayOrdered[i + 1])) {
            repetitions += 1
        } else {
            numberOfRepetitions.push(repetitions)
            repetitions = 1
        }
    }
    return numberOfRepetitions
}

const validateString = (stringToValidate) => {
    const orderedCharacterArray = sortStringAsArrayOfChars(stringToValidate)
    const numberOfRepetitionsAsArray = countNumberOfRepeat(orderedCharacterArray)

    const validate = () => {
        let countElementWithValorDifferent = 0
        let differentValues = false
        let numberOfRepeatsOfMinimumValue = 0
        for (let i = 0; i < numberOfRepetitionsAsArray.length; i++) {
            if (numberOfRepetitionsAsArray[i] === 1) {
                numberOfRepeatsOfMinimumValue++
            }
            if (numberOfRepetitionsAsArray[0] != numberOfRepetitionsAsArray[i]) {
                countElementWithValorDifferent++
                if (Math.abs(numberOfRepetitionsAsArray[0] - numberOfRepetitionsAsArray[i]) > 1) {
                    differentValues = true
                }
            }
        }
        if (countElementWithValorDifferent === 0) {
            return 'Yes'
        }
        if (countElementWithValorDifferent === 1) {
            if (differentValues === false) {
                return 'Yes'
            } else {
                if (numberOfRepeatsOfMinimumValue === 1) {
                    return 'Yes'
                }
                return 'No'
            }
        }
        return 'No'
    }
    return validate()

}

module.exports = {
    validateString,
    sortStringAsArrayOfChars,
    countNumberOfRepeat
}