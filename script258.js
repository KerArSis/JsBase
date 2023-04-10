let divs = document.querySelectorAll('div');

for (let div of divs) {
	div.addEventListener('click', func);
}

function func() {
	this.textContent++;
}