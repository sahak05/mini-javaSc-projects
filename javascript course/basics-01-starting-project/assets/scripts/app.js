let result = 0; 
const defaultResult = 0;


function getUserInput(){return parseInt(userInput.value); }
function add(){
	const enternumb= getUserInput();
	const description = result+'+' + enternumb;
	result = result + enternumb;	//can you to +userInputValue
	outputResult(result, description);
} 

function multiple(){
	const enternumb = getUserInput();
	const description = result+'*' + enternumb;
	result = result * enternumb;	//can you to +userInputValue
	outputResult(result, description);
}

function substract(){
	const enternumb = getUserInput();
	const description = result+'-' + enternumb;
	result = result - enternumb;	//can you to +userInputValue
	outputResult(result, description);
}

function div(){
	const enternumb = getUserInput();
	const description = result+'/' + enternumb;
	result = result / enternumb;	//can you to +userInputValue
	outputResult(result, description);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiple);
divideBtn.addEventListener('click', div);



