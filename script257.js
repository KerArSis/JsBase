let elems = document.querySelectorAll('.www');
let but = document.querySelector('#but')
let i = 0;
but.addEventListener('click', function func(){
	for (let elem of elems) {
		elem.textContent = elem.textContent + elem.textContent;
		console.log(elem.textContent)
	}
})