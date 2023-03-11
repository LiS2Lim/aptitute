const startButtonEl = document.querySelector('#start');
const inputNameEl = document.querySelector('#name');
const dialog = document.querySelector('dialog');

const GotoQuestion = () => {
	if(inputNameEl.value === "") {
		dialog.showModal();
	} else {
		location.href = '/questions/?name='+inputNameEl.value;
	}
}
startButtonEl.addEventListener('click', () => {
	GotoQuestion();
})

inputNameEl.addEventListener('keyup', () => {
	if(window.event.keyCode === 13) {
		GotoQuestion();
	}
})
