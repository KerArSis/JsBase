let select = document.querySelector('#select');
let button = document.querySelector('#button');
let d = new Data(2023,3,1)

button.addEventListener('click', function() {
	select.value = alert(d);
});