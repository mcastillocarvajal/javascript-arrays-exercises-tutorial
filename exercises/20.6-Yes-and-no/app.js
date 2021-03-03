let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

const wikiWoko = theBools.map(bool => {
    if(bool==0) return 'woko';
    else return 'wiki';
});

console.log(wikiWoko);
