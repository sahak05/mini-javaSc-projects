const ATTACK_VALUE=10;
const MONSTER_ATTACK = 14;
const STRONG_ATTACK_VALUE =16;
const HEAL_VALUE =20;
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';


const wantedValue = prompt("Life you want to start the game", '100');
let chosenMaxLife=parseInt(wantedValue);
while(isNaN(chosenMaxLife) || chosenMaxLife<=0){
	const reallyNumber = prompt("Life IN NUMBER you want to start the game", '100');
	chosenMaxLife=parseInt(reallyNumber);
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];

adjustHealthBars(currentMonsterHealth);

function writelog(ev,val,monsterMp,playerMp){
	let logEntry;
	
	if(event === LOG_EVENT_PLAYER_ATTACK){
		logEntry={
			event: ev;
			value:val,
			target:'Monster',
			finalMonsterHealtth: monsterMp,
			finalPlayerHealth: playerMp
		};
	}
	else if(event === LOG_EVENT_PLAYER_STRONG_ATTACK){
		logEntry={
			event: ev;
			value:val,
			target:'Monster',
			finalMonsterHealtth: monsterMp,
			finalPlayerHealth: playerMp
		};
	}
	else if(event === LOG_EVENT_MONSTER_ATTACKATTACK){
		logEntry={
			event: ev;
			value:val,
			target:'Player',
			finalMonsterHealtth: monsterMp,
			finalPlayerHealth: playerMp
		};
	}
	else if(event === LOG_EVENT_PLAYER_HEAL){
		logEntry={
			event: ev;
			value:val,
			target:'Player',
			finalMonsterHealtth: monsterMp,
			finalPlayerHealth: playerMp
		};
	}
	else if(event === LOG_EVENT_GAME_OVER){
		logEntry={
			event: ev;
			value:val,
			finalMonsterHealtth: monsterMp,
			finalPlayerHealth: playerMp
		};
	}
	battleLog.push(logEntry);
	
}

function attackMonster(){
	attack(ATTACK_VALUE);
	
}

function strongAttack(){
	
	attack(STRONG_ATTACK_VALUE);
}

function attack(attPower){
	const damage= dealMonsterDamage(attPower);
	currentMonsterHealth-= damage;
	win();
}

function heal (){
	
	if(hasBonusLife){
		win();
		if(currentPlayerHealth+HEAL_VALUE<=chosenMaxLife){
			currentPlayerHealth+=HEAL_VALUE;
			increasePlayerHealth(HEAL_VALUE);
			removeBonusLife();
		}
		else{
			const real = chosenMaxLife-currentPlayerHealth;
			currentPlayerHealth+=real;
			increasePlayerHealth(real);
			removeBonusLife();
		}
	}
	else{alert('Sorry buddy you don\'t have a bonus life ');}
}

function win(){
	initialcurrHealth = currentPlayerHealth;
	const monsterPlayer = dealPlayerDamage(MONSTER_ATTACK);
	currentPlayerHealth-= monsterPlayer;
	
	if(currentPlayerHealth<=0 && hasBonusLife){
		hasBonusLife = false;
		removeBonusLife();
		currentPlayerHealth = initialcurrHealth;
		alert('You would be dead but the bonus life saved you!!!');
	}
	//if statement Win
	if(currentMonsterHealth<=0 && currentPlayerHealth>0){
		alert('You won');
		reset();
	}
	
	else if(currentPlayerHealth<=0 && currentMonsterHealth>0){
		alert('YOU LOOSE');
		reset();
	}
	else if(currentPlayerHealth<=0 && currentMonsterHealth<=0){
		alert('IT\'S A DRAW');
		reset();
	}
}

function reset(){
	currentMonsterHealth = chosenMaxLife;
	currentPlayerHealth = chosenMaxLife;
	resetGame(chosenMaxLife);
}

function printLog(){
	console.log(battleLog);
}


attackBtn.addEventListener('click',attackMonster);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', heal);
logBtn.addEventListener('click', printLog);