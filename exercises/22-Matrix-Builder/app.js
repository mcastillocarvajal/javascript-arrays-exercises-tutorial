// Code goes here

function matrixBuilder(number) {
    let arr = [];
    for (let i = 0; i < number; i++){
        let arr2 = []
        for (let j = 0; j < number; j++){
            let n = Math.floor(Math.random()*2);
            arr2.push(n);
            
        }
        arr.push(arr2);  
    }
    return arr; 
};



// do not change anything from this line down
console.log(matrixBuilder(5));