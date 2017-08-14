function repeat(operation, num) {

	//My solution
	// if(num > 0) {
	// 	operation();
	// 	repeat(operation, --num);
	// }

	//The official solution
	if (num <= 0) return;
    	operation();
    	return repeat(operation, --num);
}

// Do not remove the line below
module.exports = repeat;