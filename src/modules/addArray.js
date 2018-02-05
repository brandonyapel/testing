function addArray(arr) {
    let result = 0;
    console.log('array input -> ', arr);
    
    for(num of arr) {
        result += num;       
    }

    return Number(result);
}

module.exports = addArray;