var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    
    let array = [];
    for (let i of people){
        if ( i !== personName){
            array.push(i);
        }
    }
    return array
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));