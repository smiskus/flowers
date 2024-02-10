let currentX = 0;
let currentY = 0;
const blockSize = 100;
const correctPath = ["Chocolate Desserts", "Iowa State Fair", "Tangled", "Water", "The Last of Us", "Chai Tea", "Magic Kingdom", "End"]
let visitedPath = new Array(5).fill(0).map(() => new Array(5).fill(0));

let path = [];

$(document).ready(function () {
    $('#reset').click(() => {
        $('#incorrectPath').css('visibility', 'hidden');
        reset();
    })
})

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent('canvas');
    background('black');
}

function draw() {
    background('black');
    drawSquares();
}

function keyPressed() {
    if (keyCode === DOWN_ARROW && currentY + 1 < 5) {
        currentY++;
    } else if (keyCode === UP_ARROW && currentY - 1 >= 0) {
        currentY--;
    } else if (keyCode === LEFT_ARROW && currentX - 1 >= 0) {
        currentX--;
    } else if (keyCode === RIGHT_ARROW && currentX + 1 < 5) {
        currentX++;
    }
    visitedPath[currentX][currentY] = 1;
    const word = grid[currentX][currentY];
    if (!path.includes(word) && word !== "Start") {
        path.push(word);
    }
    if (currentX === 4 && currentY === 4) {
        if (path.every((word) => correctPath.includes(word))) {
            $('#nextClue').css('visibility', 'visible');
            $('#incorrectPath').css('visibility', 'hidden');
        } else {
            $('#incorrectPath').css('visibility', 'visible');
        }
    }
}

function reset() {
    visitedPath = new Array(5).fill(0).map(() => new Array(5).fill(0));
    path = [];
    currentX = 0;
    currentY = 0;
}

function drawSquares() {
    grid.forEach((row, rowIndex) => {
        row.forEach((squareText, squareIndex) => {
            if (currentX === rowIndex && currentY === squareIndex) {
                stroke('#92fceb')
                strokeWeight(2)
            } else {
                stroke('black');
                strokeWeight(2);
            }

            if (visitedPath[rowIndex][squareIndex] === 1 || rowIndex === 0 && squareIndex === 0) {
                fill('#3f89b0')
            } else {
                fill('#1c475e')
            }

            rect(rowIndex * blockSize, squareIndex * blockSize, blockSize - 2)

            noStroke();
            fill('white');
            textWrap(WORD);
            text(squareText, rowIndex * blockSize + 15, squareIndex * blockSize + 20, 70)
        })
    })
}