const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#delete-modal'); another way to do it
//const startAddMovieButton = document.header.children[1];
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const deleteMovieModal = document.getElementById('delete-modal');
const movies =[];

const toggleBackdrop = ()=>{//function() to toggle the backdrop
	backdrop.classList.toggle('visible');
};

const closeMovieModal =()=>{
	addMovieModal.classList.remove('visible');
}

const showMovieModal =()=>{//function() to toggle the movie modal
	addMovieModal.classList.add('visible');
	toggleBackdrop();
}; 

const cancelAddMovie =()=>{//function() to cancel the movie modal
	clearMovieInputs();
	toggleBackdrop();
	closeMovieModal();
};

const clearMovieInputs =()=>{//clear inputs before out of the movie modal
	for (let i = 0; i < userInputs.length; i++) {
		userInputs[i].value = '';
	}
};

const updateUI = ()=>{//if a movie is added remoove the defaut block
	const section = document.getElementById('entry-text');
	if(movies.length!==0){
		section.style.display = 'none';
	}else{
		section.style.display = 'block';
	}
};

const cancelMovieDeletion =()=>{
	toggleBackdrop();
	deleteMovieModal.classList.remove('visible');
} 

const deleteMovieHandler =movieId=>{    	
	deleteMovieModal.classList.add('visible');
	toggleBackdrop();
	const cancelDeletion =deleteMovieModal.querySelector('.btn--passive');
	let confirmDeletion = deleteMovieModal.querySelector('.btn--danger');
	confirmDeletion.replaceWith(confirmDeletion.cloneNode(true));
	confirmDeletion = deleteMovieModal.querySelector('.btn--danger');

	cancelDeletion.removeEventListener('click',cancelMovieDeletion);

	cancelDeletion.addEventListener('click',cancelMovieDeletion);
	confirmDeletion.addEventListener('click',deleteMovie.bind(null,movieId));
}

const deleteMovie = (movieId)=>{
	let movieIndex =0;
	for (const movie of movies) {
		if(movie.id === movieId){
			break;
		}
		movieIndex++;
	}
	movies.splice(movieIndex,1);
	const listRoot = document.getElementById('movie-list');
	listRoot.children[movieIndex].remove();
	cancelMovieDeletion();
	updateUI();
}

const renderNewMovie = (id,title,url,rating)=>{
	const newMovieElement = document.createElement('li');
	newMovieElement.className = 'movie-element';
	newMovieElement.innerHTML = `<div class ="movie-element__image"><img src="${url}" alt="${title}"></div>
								 <div class ="movie-element__info"><h2>${title}</h2> <p>${rating}/5 stars</p></div>	
								`;
	newMovieElement.addEventListener('click',deleteMovieHandler.bind(null,id));

	const listRoot = document.getElementById('movie-list');
	listRoot.appendChild(newMovieElement);
};

const addMovieHandler = ()=>{//check the inputs and make sure its valuable
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
		return;
	}
	
	const movie1 = {id:Math.random().toString(),
					title:title,
		            image:imageUrl,
		            rating:rating
		        };

	movies.push(movie1);
	closeMovieModal();
	toggleBackdrop();
	clearMovieInputs();
	renderNewMovie(movie1.id,movie1.title,movie1.image,movie1.rating);
	updateUI();

};

const backDropClickHandler =()=>{
	closeMovieModal();
	cancelMovieDeletion();
	clearMovieInputs();
}

startAddMovieButton.addEventListener('click',showMovieModal);
backdrop.addEventListener('click', backDropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmAddMovieButton.addEventListener('click',addMovieHandler );
