canvas = document.getElementById('canvas')
c = canvas.getContext("2d")

function getMouseCoords(event) {
    rect = canvas.getBoundingClientRect()
    x = event.clientX - rect.left
    y = event.clientY - rect.top
    return {x:x, y:y}
}

function drawMouseLoc(event) {
    loc = getMouseCoords(event)
    squareSize = 100;
    
    x = Math.floor(loc.x / squareSize)
    y = Math.floor(loc.y / squareSize)
    
    drawGrid()
    drawSquare(x * squareSize, y * squareSize, squareSize, yellow)
    
    console.log(x,y)
}

canvas.addEventListener('mousemove', drawMouseLoc)

blue = '#ABCDEF'
white = '#FCFCFC'
yellow = 'rgba(255, 255, 0, 0.75)'

function drawSquare(x, y, w, color) {
    c.fillStyle = color
    c.fillRect(x,y,w,w)
}

function drawGrid() {
    const squareSize = 100;
    
    for(var y=0; y < (canvas.height / squareSize); y++) {
        for(var x=0; x < (canvas.width / squareSize); x++) {
            // If an even row
            if(y % 2 == 0) {
                if(x % 2 == 0) {
                    drawSquare(x * squareSize, y * squareSize, squareSize, blue)
                }
                else {
                    drawSquare(x * squareSize, y * squareSize, squareSize, white)
                }
            }
            else {
                if(x % 2 == 0) {
                    drawSquare(x * squareSize, y * squareSize, squareSize, white)
                }
                else {
                    drawSquare(x * squareSize, y * squareSize, squareSize, blue)
                }
            }
        }
    }    
}

drawGrid()