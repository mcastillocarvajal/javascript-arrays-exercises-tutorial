function lyricsGenerator (array) {
    let string = '';
    for (let i=0; i<array.length; i++) {
        if (array[i]==0) {
            string += "Boom ";}
        else if (array[i]==1) {
            string += "Drop the base ";
            if (array[i-2]==1 && array[i-1]==1) {
                string += "!!!Break the base!!! ";
            }
        }
    }
    return string;
}

// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))