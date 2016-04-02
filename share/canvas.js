canvas = document.getElementById('canvas');
context = canvas.getContext("2d");

// OPTIONS
const letterColor = "#222222";
const partOfWord = "#FF0000"
const gridColor = '#BB8'; // #STARWARS :)
var drawGrid = false;
var drawBorder = false;
var upperCase = false;
var highlight = false;
var width = 10;
var font = 'consolas';

canvas.addEventListener('mousemove', hoverTile);

// Parses the word box for the input words
function getWords() {
	var words = [];
	var wordBox = document.getElementById('word-box').childNodes;
	
	for(var i = 1; i < wordBox.length; i++) {
		var word = wordBox[i].textContent;
		if(word !== "") {
			words.push(word)
		}
		
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
	if(width > 15) {
		letterHeight = 16;
	}
	else {
		letterHeight = 20
	}
	
	if(letter.length > 1) {
		letter = letter[0];
	}
	context.font = letterHeight + "px " + font;
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
			letter = l[y][x]
			drawLetter(letter, (x * cellSize) + cellSize / 2, y * cellSize + cellSize / 2, '#bb8')
		}
	}
}

function hoverTile(event) {
	rect = canvas.getBoundingClientRect()
    x = Math.floor((event.clientX - rect.left) / cellSize)
    y = Math.floor((event.clientY - rect.top) / cellSize)
	
	draw(x, y);
}

// Draws everything
function draw(x, y) {	
	rows = width;
	cols = width;
	
	cellSize = canvas.width / rows;
	
	// Clear the canvas
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	// Draw grid lines if necessary
	if(drawGrid) { drawGridLines(gridColor) }
	if(drawBorder) { drawBorderLines(gridColor) }
	
	drawLetters();
	context.fillStyle = 'rgba(10, 10, 10, 0.1)';
	context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
}

function generateWordSearch() {
	console.log("Generating Word Search")

	// Get the word search
	grid = genSearch(l)

	
	
	draw();
}
url = window.location.href
code = url.split('?')[1].split(';')[0]
width = url.split('?')[1].split(';')[1]
words = url.split('?')[1].split(';')[2].split(',')

console.log(words)

l = [];
for(i=0; i < width; i++) {
	r = code.substring((i * width * 2), (i * width * 2) + (width * 2))
	a = [];
	for(j=0; j < width; j++) {
		a.push(r.substring(j * 2, j * 2 + 2))
	}
	l.push(a);
}

// Draw Word list
for(i=0; i<words.length; i++) {
	var para = document.createElement("p");
	node = document.createTextNode(words[i]);
	para.appendChild(node);
	var element = document.getElementById("word-list");
	element.appendChild(para);
	para.appendChild(node);
}


draw()


