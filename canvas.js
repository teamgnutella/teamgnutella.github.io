canvas = document.getElementById('canvas');
context = canvas.getContext("2d");

// OPTIONS
const drawGrid = true;

function drawLetter(letter, x, y) {
	if(letter.length > 1) {
		letter = letter[0];
	}
	context.fillStyle = 'black';
	context.font = "12px Consolas red";
	context.textAlign = 'center';
	context.fillText(letter, x, y);
}

document.getElementById("gen").addEventListener('click', generateWordSearch);

function getWords() {
	return wordArray;
}

rows = 10;
cols = 10;

function drawGridLines() {
	context.save();
	context.fillStyle = "#AAAAAA";
	
	for(y = 0; y < canvas.height / rows; y++) {
		for(x = 0; x < canvas.width / cols; x++) {
			
		}
	}
	
	
	context.restore();
}

function drawLetters() {
	numberX = 1;
	numberY = 1;
	
	for(y = 0; y < rows; y++) {
		for(x = 0; x < cols; x++) {
			
		}
	}
}

function generateWordSearch() {
	// Clear the canvas
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	if(drawGrid) {
		drawGridLines();
	}
	
	drawLetters();
}