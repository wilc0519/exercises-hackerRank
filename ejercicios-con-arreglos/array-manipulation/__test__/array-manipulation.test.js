const getTheMaximumValue = require("../array-manipulation")

test(`given the array [[1,3,5], [4,8,7], [6,9,1]] after the operations, 
the maximum value of the resulting array is expected to be equal to 10 ` ,() => {

    const numberOfElementOfResultingArray = 10
    const queries = [[1,5,3], [4,8,7], [6,9,1]]

    const maximumValue = getTheMaximumValue(queries, numberOfElementOfResultingArray)

    expect(maximumValue).toEqual(10)
})