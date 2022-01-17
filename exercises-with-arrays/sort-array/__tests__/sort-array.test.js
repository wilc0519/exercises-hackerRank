const sortArray = require("../sort-array")

test(`Given an unordered array of objects with 4 elements, sort descending by score and
 ascending by name`, () => {

    const arrayDisordered = [{name:'david', score: 100 }, { name: 'amy', score: 100 }, { name: 'heraldo', score: 50 },
    { name: 'aakansha', score: 75 }, { name: 'aleksa', score: 150 }]

    const arrayOrdered = sortArray(arrayDisordered)
    
    expect(arrayOrdered).toEqual([ { name: 'aleksa', score: 150 },{ name: 'amy', score: 100 },
         { name: 'david', score: 100 },{ name: 'aakansha', score: 75 }, { name: 'heraldo', score: 50 }])
    
})

test(`Given an unordered array of objects with 5 elemets, sort descending by score and ascending 
by name`, () => {

    const arrayDisordered = [{name:'david', score: 100 }, { name: 'amy', score: 100 }, { name: 'heraldo', score: 50 },
    { name: 'aakansha', score: 75 }, { name: 'aleksa', score: 150 }, {name:'fernanda', score:50}]

    const arrayOrdered = sortArray(arrayDisordered)

    expect(arrayOrdered).toEqual([ { name: 'aleksa', score: 150 },{ name: 'amy', score: 100 },
         { name: 'david', score: 100 },{ name: 'aakansha', score: 75 }, {name:'fernanda', score:50},
          { name: 'heraldo', score: 50 }])
    
})