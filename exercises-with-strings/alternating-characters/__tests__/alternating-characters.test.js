const countTheNumberOfCharactersRemoved = require("../alternative-characters")

test(`Given a string('AABAAB') with only A and B characters, remove the matching characters adjacent `, () => {
    cadena = 'AABAAB'
    const numberOfCharsRemoved = countTheNumberOfCharactersRemoved(cadena)

    expect(numberOfCharsRemoved).toEqual(2)
})

test(`Given a string ('AAAA') with only A and B characters, remove the matching characters adjacent `, () => {
    cadena = 'AAAA'
    const numberOfCharsRemoved = countTheNumberOfCharactersRemoved(cadena)

    expect(numberOfCharsRemoved).toEqual(3)
})

test(`Given a string ('BBBB') with only A and B characters, remove the matching characters adjacent `, () => {
    cadena = 'BBBB'
    const numberOfCharsRemoved = countTheNumberOfCharactersRemoved(cadena)

    expect(numberOfCharsRemoved).toEqual(3)
})

test(`Given a string ('ABABABAB') with only A and B characters, remove the matching characters adjacent `, () => {
    cadena = 'ABABABAB'
    const numberOfCharsRemoved = countTheNumberOfCharactersRemoved(cadena)

    expect(numberOfCharsRemoved).toEqual(0)
})

test(`Given a string ('BABABA') with only A and B characters, remove the matching characters adjacent `, () => {
    cadena = 'BABABA'
    const numberOfCharsRemoved = countTheNumberOfCharactersRemoved(cadena)

    expect(numberOfCharsRemoved).toEqual(0)
})

test(`Given a string ('AAABBB') with only A and B characters, remove the matching characters adjacent `, () => {
    cadena = 'AAABBB'
    const numberOfCharsRemoved = countTheNumberOfCharactersRemoved(cadena)

    expect(numberOfCharsRemoved).toEqual(4)
})