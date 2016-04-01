canvas = document.getElementById('canvas');
context = canvas.getContext("2d");

function drawLetter(letter, x, y) {
	context.font = "12px Consolas";
	context.textAlign = 'center'
	context.fillText("0", x, y);
}

rows = 10
cols = 10


for(y = 0; y < canvas.height / rows; y++) {
	for(x = 0; x < canvas.width / cols; x++) {
		drawLetter("0", (x * cols) + 5, (y * rows) + 9)
	}
}
