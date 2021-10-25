const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)


//In the attached code assignment.js, 
//you find a variable that holds a random number between 0 and 1.
// Write code that shows an alert (with any message) when that number is greater than 0.7.

if(randomNumber > 0.7){
	alert('Your random  number is greater than 0.7');
}

//Create an array of numbers (any numbers of your choice)
// and loop through the array in two different ways - outputting the numbers inside of the loop.

let array = [0,1,2];

for (let i =0; i < array.length; i++){
	console.log(array[i]);
}

for (const i of array) {
	console.log(i);
}

//Adjust one of the loops from the last task such that
// it actually starts at the end (last element) of the array and loops to the first element.

for(let i = array.length-1; i>=0; i--){
	console.log(array[i]);
}

//Create another random number
// (in a separate constant) and show an alert in two different scenarios:
// Both are greater 0.7 OR at least one of the two is NOT greater than 0.2.

const randomAnother = Math.random();
console.log(randomAnother);
if(randomNumber>0.7 && randomAnother>0.7){
	alert('All of your randoms is greater than 0.7');
}
else if(randomNumber<0.2 || randomAnother<0.2){
	alert('One of random is lower than 0.2');
}
