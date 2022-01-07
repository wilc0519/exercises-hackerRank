const countPairsOfSocks = (numberOfSocks, arrayOfSocks) => {
    arrayOfSocks.sort((secondSock, firstSock) => secondSock - firstSock)
    let numberSocksWithSameColor = 1
    let totalSocks = 0
    for (let i = 0; i < numberOfSocks; i++) {
        if (arrayOfSocks[i] === arrayOfSocks[i + 1]) {
            numberSocksWithSameColor++
        }
        else {
            if (numberSocksWithSameColor % 2 != 0) {
                numberSocksWithSameColor--
                totalSocks += numberSocksWithSameColor
                 numberSocksWithSameColor = 1
            }else{
                totalSocks += numberSocksWithSameColor
                numberSocksWithSameColor = 1
            }
        }
    }
    return (totalSocks) / 2
}

module.exports = countPairsOfSocks