const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#delete-modal'); another way to do it
//const startAddMovieButton = document.header.children[1];
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');

const toggleMovieModal =()=>{//function() to toggle the movie modal
	addMovieModal.classList.toggle('visible');
	toggleBackdrop();
}; 

const toggleBackdrop = ()=>{//function() to toggle the backdrop
	backdrop.classList.toggle('visible');
};

const cancelAddMovie =()=>{//function() to cancel the movie modal
	toggleMovieModal();
};

const addMovieHandler = ()=>{
	const title = userInputs[0].value;
	const imageUrl = userInputs[1].value;
	const rating = userInputs[2].value;
	//.trim()  is a built-in string function in JavaScript,
	// which is used to trim a string. This function removes 
	//the whitespace from both the ends
	if(title.trim()===''||
		imageUrl.trim()===''||
		rating.trim()===''||
		+rating<1||+rating>5){
		alert('Please enter valid values');
	}

};

startAddMovieButton.addEventListener('click',toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmAddMovieButton.addEventListener('click',addMovieHandler );
