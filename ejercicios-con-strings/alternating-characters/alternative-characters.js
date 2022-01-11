const countTheNumberOfCharactersRemoved = (cadena) => {
    const arrayOfChars = cadena.split('')
    let numberOfEliminations = 0
    for (let i = 0; i < arrayOfChars.length; i++) {
        if (arrayOfChars[i] === arrayOfChars[i - 1]) {
            numberOfEliminations++
        }
    }
    return numberOfEliminations
}


module.exports = countTheNumberOfCharactersRemoved