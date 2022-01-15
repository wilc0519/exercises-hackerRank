const findNumberOfValleys = require("../counting-valleys")

test(`Given the sequence of up and down steps during a hike, U represents one step up
 and D represents one step down, a valley starting with one step down from sea level 
 and ending with one step up from sea level, find and print the number of valleys 
 walked through.`, () => {
    const steps = 8
    const path = 'UDDDUDUU'

    const numberOfValleys = findNumberOfValleys(steps, path)
    expect(numberOfValleys).toEqual(1)
})