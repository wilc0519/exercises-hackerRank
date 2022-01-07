const countPairsOfSocks = require("../sales-by-match")

test(`Given an array of integer and the number of elements of it, each integer represents
 a color of one sock, determine how many pairs of socks of same color there is`, () => {
const numberOfSocks = 15
const arrayOfSocks = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]
const numberOfPairsOfSocks = countPairsOfSocks(numberOfSocks, arrayOfSocks)
expect(numberOfPairsOfSocks).toEqual(6)
})