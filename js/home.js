const startButtonEl = document.querySelector('#start');
const inputNameEl = document.querySelector('#name');
const dialog = document.querySelector('dialog');

startButtonEl.addEventListener('click', () => {
	if(inputNameEl.value === "") {
		dialog.showModal();
	} else {
		location.href = '/questions/?name='+inputNameEl.value;
	}
})
