const findMinimumNumberOfJumps = require("../jumping-on-clouds")

test(`Given an array of binary integers [0,1,0,0,0,1,0], 0 represents safe clouds and 1 
represents clouds to avoid, return the minimum number of jumps required if the player can 
jump on any cumulus cloud having a number that is equal to the number of the current cloud 
plus 1 or 2 `, () => {
    
    const clouds = [0,1,0,0,0,1,0]
    const numberOfJumps = findMinimumNumberOfJumps(clouds)
    expect(numberOfJumps).toEqual(3)
})

test(`Given an array of binary integers [0 ,0 ,1 ,0 ,0 ,1 ,0], 0 represents safe clouds and 1 
represents clouds to avoid, return the minimum number of jumps required if the player can 
jump on any cumulus cloud having a number that is equal to the number of the current cloud 
plus 1 or 2 `, () => {
    
    const clouds = [0 ,0 ,1 ,0 ,0 ,1 ,0]
    const numberOfJumps = findMinimumNumberOfJumps(clouds)
    expect(numberOfJumps).toEqual(4)
})
