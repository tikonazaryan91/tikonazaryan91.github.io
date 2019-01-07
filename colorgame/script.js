const row = 10;
const col = 10;
const board = new Array(row);
const colors = ["red", "blue", "green", "purple"];
const container = document.getElementById("container");
const btnStart = document.getElementById("btnStart");
let score = 0;
let high = 0;

btnStart.addEventListener("click", newGame);

function setUpBoard() {
    container.innerHTML = "";
    for (let i = 0; i < row; i++) {
        board[i] = [];
        for (let j = 0; j < col; j++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            let element = document.createElement("div");
            element.setAttribute('i', i);
            element.setAttribute('j', j);
            element.className = "cell";
            element.style.backgroundColor = color;
            board[i][j] = {color: color, element: element, marked: false};
            container.appendChild(board[i][j].element);
            board[i][j].element.addEventListener("click", handleClick);
        }
    }
}

setUpBoard();

function findMatchingBlocks(i, j, color) {

    if (board[i][j].marked
        || board[i][j].color !== color) {
        return 0;
    }

    board[i][j].marked = true;
    let sum = 1;
    if (i > 0) {
        sum += findMatchingBlocks(i - 1, j, color);
    }
    if (i < row - 1) {
        sum += findMatchingBlocks(i + 1, j, color);
    }
    if (j > 0) {
        sum += findMatchingBlocks(i, j - 1, color);
    }
    if (j < col - 1) {
        sum += findMatchingBlocks(i, j + 1, color);
    }

    return sum;
}

function dropMarkedBlocks() {
    for (let i = row - 1; i >= 0; i--) {
        for (let j = 0; j <= col - 1; j++) {
            if (board[i][j].marked) {
                shiftColMarkedCells(i, j);
            }
        }
    }
}

function shiftColMarkedCells(i, j) {
    let markedCellsCount = 0;
    for (let row = i; row >= 0; row--) {
        if (board[row][j].marked) {
            markedCellsCount++;
        } else {
            break;
        }
    }
    const firstCellI = i - markedCellsCount;


    for (let a = firstCellI; a >= 0 - markedCellsCount; a--) {
        const x = board[a + markedCellsCount][j];

        if (a >= 0) {
            const y = board[a][j];

            x.marked = false;
            x.element.style = `background-color: ${y.color};`;
            x.color = y.color;
        } else {
            x.marked = true;
            x.color = "white";
            x.element.style = `background-color: white;`
        }
    }
}


function updateScore() {
    document.getElementById('score').innerHTML = 'Score: ' + score;
}

function updateHighScore() {
    document.getElementById("high").innerHTML = "HighScore: " + high;
}

function handleClick(e) {
    const el = e.target;
    let i = parseInt(el.getAttribute("i"));
    let j = parseInt(el.getAttribute("j"));

    let blocks = findMatchingBlocks(i, j, board[i][j].color);
    if (blocks < 3) {
        board[i][j].marked = false;
        return;
    }
    score += blocks;
    if (score > high) {
        high = score;
    }

    dropMarkedBlocks();
    updateScore();
    updateHighScore();
}

function newGame() {
    score = 0;
    setUpBoard();
    updateScore();
}