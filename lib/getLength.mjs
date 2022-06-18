'use strict'
const getLength = arrlength => {
    
    if (arrlength - 2 > 0) {
        
        return arrlength * (arrlength - 1) * getLength(arrlength - 2)
    
    }else{
        return arrlength
    }
}

export default getLength