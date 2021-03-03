var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map((value) => {
	
    //add your code here and return the new value
    
    for (celsius in arrayOfCelsiusValues){
        let fahrenheit = 9/5 * value + 32;
        return fahrenheit;
    }
    
	
});

console.log(arrayOfFahrenheitValues);