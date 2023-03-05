const startButtonEl = document.querySelector('#start');
const inputNameEl = document.querySelector('#name');

startButtonEl.addEventListener('click', () => {
	location.href = '/questions/?name='+inputNameEl.value;
})
