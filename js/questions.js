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
let result = {
	"A": 23,
	"B": 24,
	"C": 24,
	"D": 25,
}

const render = () => {
	const question = questions[currentNumber]
	questionEl.innerHTML = question.question
	numberEl.innerHTML = question.number
	valueEl.style.width = (currentNumber+1) * 2.5 + '%'
}

const nextQuestion = (choiceNumber) => {
	if (currentNumber === questions.length -1) {
		result[questions[currentNumber].type] = result[questions[currentNumber].type] - choiceNumber
		location.href = `/result?A=${result.A}&B=${result.B}&C=${result.C}&D=${result.D}`
		return
	}
	result[questions[currentNumber].type] = result[questions[currentNumber].type] - choiceNumber
	currentNumber = currentNumber + 1;
	render();
}

choice1El.addEventListener('click', () => {
	nextQuestion(1);
})
choice2El.addEventListener('click', () => {
	nextQuestion(2);
})
choice3El.addEventListener('click', () => {
	nextQuestion(3);
})
choice4El.addEventListener('click', () => {
	nextQuestion(4);
})

labelNameEl.innerText = userName + " 様"
render();
