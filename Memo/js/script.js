document.addEventListener("DOMContentLoaded", function (event) {
    let colors = ["#7986cb", "#1e88e5", "#00796b", "#388e3c", "#e65100", "#e53935", "#5d4037", "#afb42b"];

    let cells = Array(16);
    let opened = [];

    function getRandomIndex() {
        let index = Math.floor(Math.random() * 16);
        while (cells[index] !== undefined) {
            index = Math.floor(Math.random() * 16);
        }
        return index;
    }

    for (let i = 0; i < colors.length; i++) {
        cells[getRandomIndex()] = colors[i];
        cells[getRandomIndex()] = colors[i];
    }

    const container = document.querySelector(".container");

    for (let i = 0; i < cells.length; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.id = cells[i] + i;
        cell.addEventListener("click", toggleCell);
        container.appendChild(cell);
    }

    function changeColor(cell, color){
        cell.style.background = color;
    }

    function toggleCell(e) {
        const cell = e.target;
        if(opened.indexOf(cell)>-1) return;

        if (opened.length === 0 || opened.length === 1) {
            opened.push(cell);
            changeColor(cell, cell.id.slice(0,7))
        } else if (opened.length === 2) {
            if (opened[0].id.slice(0, 7) === opened[1].id.slice(0, 7)) {
                opened[0].removeEventListener("click", toggleCell);
                opened[1].removeEventListener("click", toggleCell);
            }else{
                changeColor(opened[0], null) ;
                changeColor(opened[1], null) ;
            }

            opened=[];
            opened.push(cell);
            changeColor(cell, cell.id.slice(0,7));
        }
    }
});