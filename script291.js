let elem = document.querySelector('#elem');

elem.addEventListener('click', function(event) {
	console.log(event.target); 
	console.log(this);         
});
