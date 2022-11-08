/* Draw Canvas */
const canvas = document.getElementById(`game-canvas`);
const ctx = canvas.getContext("2d");

const stringsArr = [50, 100, 150, 200];
const buttonArr = [false, false, false, false];
let speed = 0;


let requestID;

const arr = [
  [0, 1, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 0, 0],
  [1, 0, 0, 1],
  [1, 0, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 1, 0],
  [1, 0, 1, 0],
  [1, 0, 1, 0],
  [1, 0, 1, 0]
];

function clearCanvas() {
  ctx.clearRect(0, 0, 250, 500);
}



function drawGuitar() {
  for (let i = 0; i < stringsArr.length; i++) {
    ctx.beginPath();
    ctx.moveTo(stringsArr[i], 0);
    ctx.lineTo(stringsArr[i], canvas.height);
    ctx.strokeStyle = "white";
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
          ctx.fillRect(positionX, positionY + speed, 40, 40);
          console.log(`dibuje una nota en ${positionY}`);
        }
      }
  
      positionY -= 50;
    }
  
  }
// function start(){
//     console.log("start el game")
//     requestID = requestAnimationFrame(drawSong)

// }

function updateCanvas() {
  speed += 1;

  clearCanvas();
  drawGuitar();
  drawButtons();
  drawSong();

  requestAnimationFrame(updateCanvas);
}

addEventListener("keydown", (event) => {
  if (event.keyCode === 65) {
    console.log(`aprete la tecla a`);
    buttonArr[0] = true;
    drawButtons();
  } else if (event.keyCode === 83) {
    console.log(`aprete la tecla s`);
    buttonArr[1] = true;
    drawButtons();
  } else if (event.keyCode === 68) {
    console.log(`aprete la tecla d`);
    buttonArr[2] = true;
    drawButtons();
  } else if (event.keyCode === 70) {
    console.log(`aprete la tecla f`);
    buttonArr[3] = true;
    drawButtons();
  }
});

addEventListener("keyup", (event) => {
  if (event.keyCode === 65) {
    console.log(`solte la tecla a`);
    buttonArr[0] = false;
    drawButtons();
  } else if (event.keyCode === 83) {
    console.log(`solte la tecla s`);
    buttonArr[1] = false;
    drawButtons();
  } else if (event.keyCode === 68) {
    console.log(`solte la tecla d`);
    buttonArr[2] = false;
    drawButtons();
  } else if (event.keyCode === 70) {
    console.log(`solte la tecla f`);
    buttonArr[3] = false;
    drawButtons();
  }
});

updateCanvas();
