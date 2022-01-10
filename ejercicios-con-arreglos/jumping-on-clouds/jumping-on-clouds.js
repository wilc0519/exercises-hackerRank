const findMinimumNumberOfJumps = (clouds) =>{
    let jumps = 0
    let position = 0
    while(position < clouds.length-1){
        if(clouds[position + 2]===0){
            jumps++
            position+=2
        }else{
            jumps++
            position+=1
        }
        
    }
    return jumps
}

module.exports = findMinimumNumberOfJumps