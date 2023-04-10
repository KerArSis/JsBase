let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);
function func() {
	this.value = '!!!';
}