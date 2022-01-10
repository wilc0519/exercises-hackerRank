const findNumberOfValleys = (steps, path)=>{
    const pathAsArray = path.split('')
    let countNumberOfValleys = 0
    let seaNevel = 0
    for(let step = 0; step < steps ; step++){
        if(pathAsArray[step]==='U'){
            seaNevel++
            if(seaNevel === 0){
                countNumberOfValleys++
            }
        }else{
            seaNevel--
        }
    }
    return countNumberOfValleys
}

module.exports = findNumberOfValleys