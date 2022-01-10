const {calculateNumberOfBribesOrChaos,
    tranformerStringToArrayOfNumbers} = require("../new-year-chaos")

test(`Given an array [1,2,3,5,4,6,7,8] each element represents the starting position  of the
 people in the column, determine how many people were bribes to obtain the given array.`, () => {
    const positions = [1, 2, 3, 5, 4, 6, 7, 8]
    const numberOfBribes = calculateNumberOfBribesOrChaos(positions)

    expect(numberOfBribes).toEqual(1)
})


test(`Given an array [4,1,2,3] each element represents the starting position  of the
people in the column, determine how many people were bribes to obtain the given array`, () => {
    const positions = [4, 1, 2, 3]
    const numberOfBribes = calculateNumberOfBribesOrChaos(positions)

    expect(numberOfBribes).toEqual('To chaotic')
})


test(`Given an array [2,1,3,5,4,6,8,7] each element represents the starting position  of the
people in the column, determine how many people were bribes to obtain the given array`, () => {
    const positions = [2, 1, 3, 5, 4, 6, 8, 7]
    const numberOfBribes = calculateNumberOfBribesOrChaos(positions)

    expect(numberOfBribes).toEqual(3)
})


test(`tranformer a string to an array of numbers`,() => {
    const text = `2 4 5 3 1 8 9 7 11 10 6 13 15`
    const stringTransformado = tranformerStringToArrayOfNumbers(text)
    expect(stringTransformado).toEqual([2, 4, 5, 3, 1, 8, 9, 7, 11, 10, 6, 13, 15])
})

test(`Given an string '2 4 5 3 1 8 9 7 11 10 6 12', each element represents the starting position  of the
people in the column, determine how many people were bribes to obtain the given array`, () => {
    const text = `2 4 5 3 1 8 9 7 11 10 6 12`
    const positions = tranformerStringToArrayOfNumbers(text)
    const numberOfBribes = calculateNumberOfBribesOrChaos(positions)
    console.log(numberOfBribes)

    expect(numberOfBribes).toEqual(14)
})

