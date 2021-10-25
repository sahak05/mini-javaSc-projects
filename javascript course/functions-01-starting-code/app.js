const startGameBtn = document.getElementById('start-game-btn');

const SELECTION1 = 'ROCK';
const SELECTION2 = 'PAPER';
const SELECTION3 = 'SCISSORS';
const DRAW = 'DRAW';
const CWIN = 'Computer wins';
const PWIN = 'Player wins';

let gameisRunning = false;

const choice = function(){
	const yourChoice = prompt('ROCK PAPER or SCISSORS?', '').toUpperCase();
	if(yourChoice!=SELECTION3 && yourChoice!= SELECTION2 && yourChoice!=SELECTION3){
		alert('Invalide choice!, we choose Rock for you');
		return SELECTION1;
	}
	return yourChoice;
};


const computerChoice = function(){
	const randomValue = Math.random();
	if(randomValue<0.34){
		return SELECTION1;
	}
	else if(randomValue<0.67){
		return SELECTION2;
	}
	else{ return SELECTION3;}
};

const getWinner = (cChoice,pChoice)=>{
	if(cChoice === pChoice){
		return DRAW;
	}
	else if(cChoice===SELECTION1 && pChoice === SELECTION2 || 
		cChoice===SELECTION2 && pChoice=== SELECTION3 || 
		cChoice === SELECTION3 && pChoice=== SELECTION1){
		return PWIN;
	}
	else if(pChoice===SELECTION1 && cChoice === SELECTION2 || 
		pChoice===SELECTION2 && cChoice=== SELECTION3 || 
		pChoice === SELECTION3 && cChoice=== SELECTION1){
		return CWIN;
	}

};

//anonymous functions inside
startGameBtn.addEventListener('click',function startGame(){
	if(gameisRunning === false){
		gameisRunning = true;
		console.log('The game is starting......');
		const playerSelection = choice();
		const computerSelection = computerChoice();
		const win = getWinner(computerSelection,playerSelection);
		console.log(win);
		alert(win);
		gameisRunning = false;

	}
	return;
});