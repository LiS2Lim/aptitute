import { questions } from './data.js';

const userName = new URLSearchParams(location.search).get('name');
const labelNameEl = document.querySelector('#userName');

const valueEl = document.querySelector('.value');
const numberEl = document.querySelector('.number');
const questionEl = document.querySelector('.question');
const choice1El = document.querySelector('.choice1');
const choice2El = document.querySelector('.choice2');
const choice3El = document.querySelector('.choice3');
const choice4El = document.querySelector('.choice4');

let currentNumber = 0
let result = ''

const render = () => {
	const question = questions[currentNumber]
	questionEl.innerHTML = question.question
	numberEl.innerHTML = question.number
	choice1El.innerHTML = question.choices[0].text
	choice2El.innerHTML = question.choices[1].text
	valueEl.style.width = (currentNumber+1) * 2.5 + '%'
}

const nextQuestion = (choiceNumber) => {
	if (currentNumber === questions.length -1) {
		location.href = '/result'
		return
	}
	result = result + choiceNumber;
	currentNumber = currentNumber + 1;
	render();
}

choice1El.addEventListener('click', () => {
	nextQuestion(0);
})
choice2El.addEventListener('click', () => {
	nextQuestion(1);
})

labelNameEl.innerText = userName + " 様"
render();
