let ctx = [];
let balls = [];
let imageList = [orange, red, blue, green, grey, purple];


//2rd qayl stexcum enq Ball constructor@

function Ball(x, y) {
    this.x1 = x;
    this.y1 = y;
    this.x2 = x;
    this.y2 = y;
}


//1in qaylov kgrenq init funkcian

function initialize() {
    //create ball Objects
    for (let x = 0; x < 10; x++) {
        balls[x] = [];
        for (let y = 0; y < 10; y++) {
            balls[x][y] = new Ball(x, y)
        }
    }

    //3rd qayl set color
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            while (true) {
                let colorNum = Math.floor(Math.random() * 6);
                if (checkColor(x, y, colorNum)) {
                    balls[x][y].color = colorNum;
                    break;
                }
            }
        }
    }

    // 5rd qaylov Initialize enq anum canvas@

    let canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    // 6rd qaylov nkarum enq paint funkcian u kanchum aystex

    paint();

}

//4rd qayl grum enq checkColor@

function checkColor(x, y, c) {
    let flag = true;

    if (x > 1) {
        let c0 = balls[x - 2][y].color;
        let c1 = balls[x - 1][y].color;
        if (c0 === c1 && c1 === c) {
            flag = false;
        }
    }

    if (y > 1) {
        let c0 = balls[x][y - 2].color;
        let c1 = balls[x][y - 1].color;
        if (c0 === c1 && c1 === c) {
            flag = false;
        }
    }
    return flag;
}

//7 rd qayl...paint- haytararel@

function paint() {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            //8rd qaylov DrawImage(image,x,y,width,height)
            ctx.drawImage(imageList[balls[x][y].color], x * 60, y * 60 + 100, 60, 60);

        }
    }
    //9rd qaylov nkarum enq text@
    ctx.font = "bold 20px Open Sans";
    ctx.textAlign = "center";
    ctx.fillText("Movies left:10", 150, 50);
    ctx.fillText("Score:33333", 450, 50);
}
