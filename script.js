// // Color change functions
// // To Red
// function changeRed() {
//     document.body.style.backgroundColor = 'red';
// }

// // To White
// function changeWhite() {
//     document.body.style.backgroundColor = 'white';
// }

// // To Blue
// const changeBlue = () => {
//     document.body.style.backgroundColor = 'blue'};

// // To Yellow
// const changeYellow = function () {
//     document.body.style.backgroundColor = 'yellow';
// }

// // Grab the event hadler
// const redButton = document.querySelector('.red');

// const whiteButton = document.querySelector('.white');

// const blueButton = document.querySelector('.blue');

// const yellowButton = document.querySelector('.yellow');

// // Event Listners
// // redButton.addEventListener('click', changeRed);
// // whiteButton.addEventListener('click', changeWhite);
// // blueButton.addEventListener('click', changeBlue);
// // yellowButton.addEventListener('click', changeYellow);

// // const redButton = document.querySelector('.red');

// redButton.addEventListener('click', handleClickEvent);

const ulColor = document.querySelector('.js-buttons');
ulColor.addEventListener('click', handleClickEvent);

function handleClickEvent(event) {
	console.log(event);
	if (event.target.nodeName === 'A') {
		console.log('I was clicked!');
		document.body.style.backgroundColor = event.target.className;
		// document.body.style.color =
	}
}
