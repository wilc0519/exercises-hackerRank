const { validateString,
    sortStringAsArrayOfChars,
    countNumberOfRepeat } = require("../sherlock-valid-string")


test(`Sort a given string('dabc') in ascending order and returns as an array of 
characters. [a,b,c,d]`, () => {
    const messyString = 'dabc'
    const orderedStringAsArray = sortStringAsArrayOfChars(messyString)
    expect(orderedStringAsArray).toEqual(['a', 'b', 'c', 'd'])
})

test(`Sort a given string ("dadbcch") in ascending order and returns as an array of 
characters.  [a,b,c,c,d,d,h]`, () => {
    const messyString = 'dadbcch'
    const orderedStringAsArray = sortStringAsArrayOfChars(messyString)
    expect(orderedStringAsArray).toEqual(['a', 'b', 'c', 'c', 'd', 'd', 'h'])
})

test(`Given an array ordered [a,a,a,b,c,c,d], to count how many times each of the elements
 of the array are repeated and return in a new array [3,1,2,1]`, () => {
    const arrayOrdered = ['a', 'a', 'a', 'b', 'c', 'c', 'd']
    const numberOfRepeatAsArray = countNumberOfRepeat(arrayOrdered)
    expect(numberOfRepeatAsArray).toEqual([3, 1, 2, 1])
})


test(`Given a string ('dabc'), it is considered valid if the characters are repeated the same
 number of times, it is also considered valid if when eliminating a character we equal
  the number of times the characters are repeated`, () => {
    const stringToValidate = 'dabc'
    const validatedString = validateString(stringToValidate)
    expect(validatedString).toEqual('Yes')
})


test(`Given a string ('abcdbb'), it is considered valid if the characters are repeated the
 same number of times, it is also considered valid if when eliminating a character we equal
 the number of times the characters are repeated`, () => {
    const stringToValidate = 'abcdbb'
    const validatedString = validateString(stringToValidate)
    expect(validatedString).toEqual('No')
})


test(`Given a string ('abcdb'), it is considered valid if the characters are repeated the
 same number of times, it is also considered valid if when eliminating a character we equal
 the number of times the characters are repeated`, () => {
    const stringToValidate = 'abcdb'
    const validatedString = validateString(stringToValidate)
    expect(validatedString).toEqual('Yes')
})


test(`Given a string ('aabbccddeefghi'), it is considered valid if the characters are 
repeated the same number of times, it is also considered valid if when eliminating a character we equal
 the number of times the characters are repeated`, () => {
    const stringToValidate = 'aabbccddeefghi'
    const validatedString = validateString(stringToValidate)
    expect(validatedString).toEqual('No')
})

test(`Given a string ('ibfdgaeadiaefg....'), it is considered valid if the characters are 
repeated the same number of times, it is also considered valid if when eliminating a character we equal
 the number of times the characters are repeated`, () => {
    const stringToValidate = `ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd`
    const validatedString = validateString(stringToValidate)
    expect(validatedString).toEqual('Yes')
})

