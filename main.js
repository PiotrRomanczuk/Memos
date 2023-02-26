const boxesNodeList = document.querySelectorAll('.box');
const boxesArray = Array.prototype.slice.call(boxesNodeList);

console.log(boxesNodeList);
console.log(boxesArray);

for (i = 0; i < boxesArray.length; i++) {
	let box = boxesArray[i];
	box.setAttribute('id', i);
	console.log(box);
}

let pizzaIcons = [
	{
		name: 'pizza1',
		source: './icons/pizza1.png',
	},
	{
		name: 'pizza2',
		source: './icons/pizza2.png',
	},
	{
		name: 'pizza3',
		source: './icons/pizza3.png',
	},
];
console.log(randomId);

function getMatchingBoxes() {
	for (i = 0; i < boxesArray.length / 2; i++) {
		let matchedBoxes = [];
		let randomId = Math.floor(Math.random() * boxesArray.length);

		matchedBoxes.push(boxesArray[randomId()]);
	}
}

// mappedBoxes = [[0,1], [2,3], [4,5]]

function setIcons() {
	getRandomTwoBoxes();
}

function checkSimilarBoxes() {}
