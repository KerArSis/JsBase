let elem = document.querySelector('#elem');
let button = document.querySelector('#but')
let button1 = document.querySelector('#but1')
console.log(elem.checked);
button.addEventListener('click', function func(){
	elem.checked= !elem.disabled
})
button1.addEventListener('click', function func(){
	elem.checked= elem.disabled
})