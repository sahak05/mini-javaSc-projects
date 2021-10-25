const task3Element = document.getElementById('task-3');

function hello(){
	alert('Hello world');
}

function greet(name){
	alert(name);
}

hello();
greet('Abdoul');

task3Element.addEventListener('click',hello);

function brand( string1,string2,string3){
	return string1+string2+string3;
}

alert(brand('dis ','a ','Abdoul'));