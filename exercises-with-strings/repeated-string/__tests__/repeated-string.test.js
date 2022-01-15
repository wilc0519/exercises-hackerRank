const countLetterAInNLettersOfString = require("../repeated-string")

test(`There is a string, s, of lowercase English letters that is repeated infinitely 
many times. Given an integer, n, find and print the number of letter a's in the first n 
letters of the infinite string.`, () =>{
    const s = 'abcac'
    const n = 10

    const numberOfa = countLetterAInNLettersOfString(s, n)
    expect(numberOfa).toEqual(4) 
})

test(`There is a string, s, of lowercase English letters that is repeated infinitely 
many times. Given an integer, n, find and print the number of letter a's in the first n 
letters of the infinite string.`, () =>{
    const s = 'epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq'
    const n = 549382313570

    const numberOfa = countLetterAInNLettersOfString(s, n)
    expect(numberOfa).toEqual(16481469408) 
})

test(`There is a string, s, of lowercase English letters that is repeated infinitely 
many times. Given an integer, n, find and print the number of letter a's in the first n 
letters of the infinite string.`, () =>{
    const s = 'aab'
    const n = 882787

    const numberOfa = countLetterAInNLettersOfString(s, n)
    expect(numberOfa).toEqual(588525) 
})