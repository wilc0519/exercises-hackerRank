const findNumberOfValleys = (steps, path)=>{
    const pathAsArray = path.split('')
    console.log(pathAsArray)
    let countNumberOfValleys = 0
    let seaNevel = 0
    for(let step = 0; step < steps ; step++){
        if(pathAsArray[step]==='U'){
            seaNevel++
            console.log(seaNevel)
            if(seaNevel === 0){
                countNumberOfValleys++
            }
        }else{
            seaNevel--
            console.log(seaNevel)
        }
    }
    return countNumberOfValleys
}

module.exports = findNumberOfValleys