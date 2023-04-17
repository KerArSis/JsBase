let select = document.querySelector('#select');
let but = document.getElementsByTagName('#button');
let inp = document.getElementsByTagName('#input');

but.addEventListener('change', function(){
	console.log(this.value);
});