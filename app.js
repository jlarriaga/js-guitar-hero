/* Draw Canvas */
const canvas = document.getElementById(`game-canvas`);
const ctx = canvas.getContext("2d");

const stringsArr = [50, 100, 150, 200];
const buttonArr = [false, false, false, false];

let speed = 0;
let gameover = false;
let score = 0;
const scoreLabel = document.querySelector(`#score-container span`);;
let requestID;

const SONG = new Audio();
SONG.src = "../assets/hero.mp3"
SONG.volume = 0.2;
//SONG.loop = true;
//SONG.play();
//SONG.pause();
//SONG.currentTime = 0;


const arr = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 1, 0],

];

function clearCanvas() {
  ctx.clearRect(0, 0, 250, 500);
}

function drawGuitar() {
  for (let i = 0; i < stringsArr.length; i++) {
    ctx.beginPath();
    ctx.moveTo(stringsArr[i], 0);
    ctx.lineTo(stringsArr[i], canvas.height);
    ctx.strokeStyle = "#47BDCF";
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

function drawButtons() {
  for (let i = 0; i < buttonArr.length; i++) {
    if (buttonArr[i]) {
      switch (i) {
        case 0:
          ctx.fillStyle = `#29AF29`;
          break;
        case 1:
          ctx.fillStyle = `#CF3A3C`;
          break;
        case 2:
          ctx.fillStyle = `yellow`;
          break;
        case 3:
          ctx.fillStyle = `blue`;
          break;
      }
    } else {
      ctx.fillStyle = `white`;
    }
    ctx.fillRect(stringsArr[i] - 20, (canvas.height * 4) / 5, 40, 40);
  }
}

function drawSong() {
  let positionX = 0;
  let positionY = -10;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      switch (j) {
        case 0:
          positionX = 30;
          ctx.fillStyle = `#29AF29`;
          break;
        case 1:
          positionX = 80;
          ctx.fillStyle = `#CF3A3C`;
          break;
        case 2:
          positionX = 130;
          ctx.fillStyle = `yellow`;
          break;
        case 3:
          positionX = 180;
          ctx.fillStyle = `blue`;
          break;
      }
      //add speed to Y pos
      if (arr[i][j] > 0) {
        if(positionY + speed  >= 400 && positionY + speed <= 440 && buttonArr[0]===true){
            arr[i][j] = 0;
            score += 25;
            console.log("ya le di al verde",positionY + speed);
        }else if(positionY + speed  >= 400 && positionY + speed <= 440 && buttonArr[1]===true){
            console.log("ya le di al rojo",positionY + speed);
            arr[i][j] = 0;
            score += 25;
        }else if(positionY + speed  >= 400 && positionY + speed <= 440 && buttonArr[2]===true){
            console.log("ya le di amarillo",positionY + speed);
            arr[i][j] = 0;
            score += 25;
        }else if(positionY + speed  >= 400 && positionY + speed <= 440 && buttonArr[3]===true){
            console.log("ya le di azul",positionY + speed);
            arr[i][j] = 0;
            score += 25;
        } if(positionY + speed > 480){
            score -= 25;
            arr[i][j] = 0;

        }



        // positionY + 40 > -((canvas.height * 4)/5 + 40)&& positionY < -((canvas.height * 4)/5

        // console.log("positionY:",positionY,"canvas;", -((canvas.height*4)/5),"buttons", buttonArr[1]);
        ctx.fillRect(positionX, positionY + speed, 40, 40);
        // console.log(`dibuje una nota en ${positionY}`);
      }

      

    }

    positionY -= 50;
  }
}
// function start(){
//     console.log("start el game")
//     requestID = requestAnimationFrame(updateCanvas)

// }

function updateCanvas() {
  speed += 3.2;
  SONG.play();

  clearCanvas();
  drawGuitar();
  drawButtons();
  drawSong();
  if(score < -500){
    
    requestID = undefined
    console.log("perdimos");
  }
  scoreLabel.innerHTML = score;
  console.log("score", score);


//   requestAnimationFrame(updateCanvas);
  
  if (requestID) {
    requestID = requestAnimationFrame(updateCanvas);
    
  }
}

addEventListener("keydown", (event) => {
  if (event.keyCode === 65) {
    // console.log(`aprete la tecla a`);
    buttonArr[0] = true;
    drawButtons();
  } else if (event.keyCode === 83) {
    // console.log(`aprete la tecla s`);
    buttonArr[1] = true;
    drawButtons();
  } else if (event.keyCode === 68) {
    // console.log(`aprete la tecla d`);
    buttonArr[2] = true;
    drawButtons();
  } else if (event.keyCode === 70) {
    // console.log(`aprete la tecla f`);
    buttonArr[3] = true;
    drawButtons();
  }
});

addEventListener("keyup", (event) => {
  if (event.keyCode === 65) {
    // console.log(`solte la tecla a`);
    buttonArr[0] = false;
    drawButtons();
  } else if (event.keyCode === 83) {
    // console.log(`solte la tecla s`);
    buttonArr[1] = false;
    drawButtons();
  } else if (event.keyCode === 68) {
    // console.log(`solte la tecla d`);
    buttonArr[2] = false;
    drawButtons();
  } else if (event.keyCode === 70) {
    // console.log(`solte la tecla f`);
    buttonArr[3] = false;
    drawButtons();
  }
});

function startGame(){
    const home = document.getElementById("home-screen");
    const canvasG = document.getElementById("game-canvas");
    const scoreL = document.getElementById("score-container");

    home.style.display = "none";
    canvasG.style.display = "block";
    scoreL.style.display = "block";

    requestID = requestAnimationFrame(updateCanvas);
}

document.getElementById("start-button").onclick = function() {
    startGame();
  };

function pauseGame(){
    requestID = undefined;
}

document.getElementById("pause-button").onclick = function() {
    pauseGame();
  };



// updateCanvas();

