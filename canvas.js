canvas = document.getElementById('canvas');
context = canvas.getContext("2d");

function drawLetter(letter, x, y) {
	if(letter.length > 1) {
		letter = letter[0]
	}
	
	context.font = "12px Consolas";
	context.textAlign = 'center'
	context.fillText(letter, x, y);
}

document.getElementById("add").addEventListener('click', getWords)

function getWords() {
	console.log(wordArray)
}

rows = 10
cols = 10

for(y = 0; y < canvas.height / rows; y++) {
	for(x = 0; x < canvas.width / cols; x++) {
		drawLetter("0", (x * cols) + 5, (y * rows) + 9)
	}
}
