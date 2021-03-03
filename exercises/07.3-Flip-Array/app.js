var arr = [45,67,87,23,5,32,60];

//Your code here.

var flippedArr = []
for (let i = arr.length - 1; i>=0; i--){
    let number = arr[i];
    flippedArr.push(number);
}
console.log(flippedArr);
