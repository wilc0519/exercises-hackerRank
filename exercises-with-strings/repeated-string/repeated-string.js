const countLetterAInNLettersOfString = (s, n) => {
    let numberOfaInStringS = 0
        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i) === 'a') {
                numberOfaInStringS++
            }
        }

        let numberOfA =  (Number.parseInt(n/s.length)*numberOfaInStringS)
        const numberOfMissingIterations = n-(Number.parseInt(n/s.length)*s.length)
        
        for(let j = 0; j<numberOfMissingIterations; j++){
            if (s.charAt(j) === 'a') {
                numberOfA++
            }
        }
    return numberOfA
}

module.exports = countLetterAInNLettersOfString