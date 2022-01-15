const sortArray = (arrayDisordered) => {
    const arrayOrdered=arrayDisordered.sort((secondPlayer, firstPlayer) => {

        const sortByScore=firstPlayer.score-secondPlayer.score
        const ordenarPorName=secondPlayer.name.localeCompare(firstPlayer.name)

        return sortByScore === 0 ?ordenarPorName : sortByScore
    })
    return arrayOrdered
}

module.exports = sortArray