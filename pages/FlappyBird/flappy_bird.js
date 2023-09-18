"use stcict";

let bird = new Image();
let back = new Image();
let pipeBottom = new Image();
let pipeUp = new Image();
let road = new Image();
let fly = new Audio();
let score = new Audio();
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
bird.src = "img/bird.png";
back.src = "img/back.png";
pipeBottom.src = "img/pipeBottom.png";
pipeUp.src = "img/pipeUp.png";
road.src = "img/road.png";
fly.src = "audio/fly.mp3";
score.src = "audio/score.mp3";
console.log(canvas.width);
console.log(canvas.height);
console.log(back.width);
console.log(back.height);
let startPosBirdX = 50;
let startPosBirdY = 150;
let gravity = 0.3; // Гравитация
let velY = 0; // Вертикальная скорость
let gap = 140;
let pipe = [];
pipe[0] = {
	x: canvas.width,
	y: 0
}
let overlapDotTop = startPosBirdY;
let overlapDotBottom = startPosBirdY + bird.height;
//console.log("нижняя = " + overlapDotBottom);

function draw() {
    ctx.drawImage(back, 0, 0);
    ctx.drawImage(bird, startPosBirdX, startPosBirdY);
    if (startPosBirdY >= back.height - road.height) {
        //location.reload();
        restartGame();
    }
    velY += gravity;
    startPosBirdY += velY;
    overlapDotTop = startPosBirdY;
    overlapDotBottom = startPosBirdY + bird.height;
    // console.log("нижняя = " + overlapDotBottom);
    // console.log("верхняя = " + overlapDotTop);
    for (let i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
        pipe[i].x -= 2;
        //console.log(pipe[i].x);
        if(pipe[i].x == 40) {
            pipe.push({
                x: canvas.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height,
            });
        }
        // if(pipe[i].x < -pipeUp.width) {
        //     pipe.shift();
        // }
        if (startPosBirdX + bird.width >= pipe[i].x && startPosBirdX <= pipe[i].x + pipeUp.width && 
        (startPosBirdY <= pipe[i].y + pipeUp.height || 
            startPosBirdY + bird.height >= pipe[i].y + pipeUp.height + gap)) {
        //location.reload();
        restartGame();
    }
    if (pipe[i].x == 0) {
        score.play();
    }
    }
    ctx.drawImage(road, 0, 420);
}
canvas.addEventListener("mousedown", moveUp);
function moveUp() {
    velY = -5;
    fly.play();
}
setInterval(draw, 20);


function restartGame() {
    startPosBirdX = 50;
    startPosBirdY = 150;
    gravity = 0.3; // Гравитация
    velY = 0; // Вертикальная скорость
    pipe = [];
    pipe[0] = {
	    x: canvas.width,
	    y: 0
    }
}

