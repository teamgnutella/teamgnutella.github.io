canvas = document.getElementById('canvas');
context = canvas.getContext("2d");

// OPTIONS
const letterColor = "#222222";
const partOfWord = "#FF0000"
const gridColor = '#BB8'; // #STARWARS :)
const drawGrid = true;
const drawBorder = true;

document.getElementById("gen").addEventListener('click', generateWordSearch);

function getWords() {
	var words = [];
	var wordBox = document.getElementById('word-box').childNodes;
	
	for(var i = 1; i < wordBox.length; i++) {
		var word = wordBox[i].textContent;
		words.push(word)
	}	
	
	return words;
}

function setColor(color) {
	context.strokeStyle = color;
	context.fillStyle = color;
}

function drawBorderLines(color) {
	setColor(color)
	context.strokeRect(0,0, canvas.width, canvas.height);
}

function drawGridLines(color) {
	setColor(color)
	
	// Draw vertical gridlines
	for(x = 1; x < cols; x++) {
		context.fillRect((x * cellSize), 0, 1, canvas.width)
	}
	
	// Draw horizontal gridlines
	for(y = 1; y < rows; y++) {
		context.fillRect(0, (y * cellSize), canvas.width, 1)
	}

}

function drawLetter(letter, x, y, color) {
	letterHeight = 20
	
	if(letter.length > 1) {
		letter = letter[0];
	}
	context.font = letterHeight + "px Consolas";
	context.textAlign = 'center';
	context.textBaseline = 'middle';
	setColor(color)
	context.fillText(letter, x, y);
}

function drawLetters() {
	numberX = 1;
	numberY = 1;
	
	for(y = 0; y < rows; y++) {
		for(x = 0; x < cols; x++) {
			letter = grid[x][y]
			
			if(letter.isPartOfWord) {
				color = partOfWord;
			}
			else {
				color = letterColor;
			}
			drawLetter(letter.str, (x * cellSize) + cellSize / 2, y * cellSize + cellSize / 2, color)
		}
	}
}

function generateWordSearch() {
	console.log("generating word search")
	
	// Get the word search
	grid = genSearch(getWords())
	
	width = document.getElementById('width').value

	rows = width;
	cols = width;
	
	cellSize = canvas.width / rows;
	
	// Clear the canvas
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	// Draw grid if necessary
	if(drawGrid) { drawGridLines(gridColor) }
	if(drawBorder) { drawBorderLines(gridColor) }
	
	drawLetters();
}

//generateWordSearch()