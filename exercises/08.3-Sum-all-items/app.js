var theArray = [2,13,34,5];

function sumTheElements(theArray){
	
	var total = 0;
	
    //your code here
    
    for (position in theArray) {
        total += theArray[position];
    }

	return total;
}