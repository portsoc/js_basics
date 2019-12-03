const canvasEl = document.querySelector('#nevertheless');
const c = canvasEl.getContext("2d");


function line(x1, y1, x2, y2) {
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.stroke();
}

function triangle(x1, y1, x2, y2, x3, y3) {
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.lineTo(x3, y3);
  c.closePath();
  c.stroke();
}

c.lineCap = "square";
c.lineWidth = 1;
c.fillStyle="#ff000010";

// for (let angle=0; angle<360; angle+=10) {
//   c.beginPath();
//   c.ellipse(400, 400, 200, 50, angle/180*Math.PI, 0, Math.PI*2);
//   c.fill();
// }

// function smileyFace(cx = 0, cy = 0, faceR = 100, smileA = 120) {
//   const eyes = 120/200*faceR;
//   const eyeH = 70/200*faceR;
//   const eyeR = 30/200*faceR;
//   const smileR = 150/200*faceR;
//
//   c.beginPath();
//   c.ellipse(cx, cy, faceR, faceR, 0, 0, Math.PI*2);
//   c.stroke();
//   c.beginPath();
//   c.ellipse(cx-eyes, cy-eyeH, eyeR, eyeR, 0, 0, Math.PI*2);
//   c.stroke();
//   c.beginPath();
//   c.ellipse(cx+eyes, cy-eyeH, eyeR, eyeR, 0, 0, Math.PI*2);
//   c.stroke();
//   c.beginPath();
//   c.ellipse(cx, cy, smileR, smileR, 0, (90-smileA/2) / 180 * Math.PI, (90+smileA/2) / 180 * Math.PI);
//   c.stroke();
// }
//
// const shouldersInput = document.querySelector('#shoulders');
// const smileInput = document.querySelector('#smile');
//
//
// function drawMatt() {
//   smileyFace(400, 200, 100, smileInput.valueAsNumber);
//
//   const now = Date.now();
//   const breath = Math.sin(now/3000*tau)*10;
//
//   const shoulders = shouldersInput.valueAsNumber + breath;
//
//   // body
//   // line(400, 300, 400, 500);
//   triangle(400-shoulders, 300, 400+shoulders, 300, 400, 500);
//
//   // arms (l, r)
//   line(400-shoulders, 300, 300-shoulders, 500);
//   line(400+shoulders, 300, 500+shoulders, 500);
//
//   // legs (l, r)
//   line(400, 500, 300, 700);
//   line(400, 500, 500, 700);
//
//   uopLogo(380, 320, shoulders/10);
// }
//
// // drawMatt();
// //
// // requestAnimationFrame(redraw);
// //
// // function redraw() {
// //   c.clearRect(0,0,canvasEl.width, canvasEl.height);
// //   drawMatt();
// //   requestAnimationFrame(redraw);
// // }
//
// // draw the Uni of Portsmouth logo
// function uopLogo(x0=0, y0=0, s=100) {
//   c.beginPath();
//   c.translate(x0, y0);
//   c.moveTo(0,0);
//   c.lineTo(s*2, 0);
//   c.lineTo(s*2, s*3);
//   c.lineTo(s, s*3);
//   c.arcTo(0, s*3, 0, s*2, s);
//   c.closePath();
//   c.stroke();
//
//   c.beginPath();
//   c.moveTo(s,s);
//   c.lineTo(s*2, s);
//   c.arcTo(s*3, s, s*3, s*2, s);
//   c.arcTo(s*3, s*3, s*2, s*3, s);
//   c.lineTo(s, s*4);
//   c.closePath();
//   c.lineTo(s*2, 0);
//   c.stroke();
//   c.translate(-x0, -y0);
// }
//
//
//








// line(300, 100, 700, 100);
// line(700, 100, 700, 200);
// c.lineWidth = 50;
// c.beginPath();
// c.moveTo(300, 400);
// c.lineTo(700, 400);
// c.lineTo(700, 600);
// c.lineTo(300, 600);
// c.closePath();
// c.fill();

// c.fillRect(300, 400, 400, 200);

// c.strokeStyle = 'red';
// c.lineWidth = 10;
// line(100, 100, 500, 200);



// function drawGrid(step=60) {
//   for (let i=0; i<=canvasEl.height; i+=step) {
//     line(0, i, canvasEl.width, i);
//     line(i, 0, i, canvasEl.height);
//   }
// }
//
//
// const stepInput = document.querySelector('#step');
// stepInput.addEventListener('input', redrawGrid);
//
// function redrawGrid() {
//   c.clearRect(0,0,canvasEl.width, canvasEl.height);
//   drawGrid(stepInput.valueAsNumber);
// }


const cx=400;
const cy=400;
const r=300;
const step=20;

const tau = 2*Math.PI;

function rad(degrees) {
  return degrees / 360 * tau;
}


function circles(cx, cy) {
  for (let radius=10; radius<r; radius+=step) {
    c.beginPath();
    c.ellipse(cx, cy, radius, radius, 0, 0, tau);
    c.stroke();
  }
}

// for (let angle = 0; angle < 360; angle += step) {
//   const x = Math.cos(rad(angle))*r;
//   const y = Math.sin(rad(angle))*r;
//   circles(cx+x, cy+y);
// }

function redrawCircles() {
  c.clearRect(0,0,canvasEl.width, canvasEl.height);

  const now = Date.now();
  const breath = Math.sin(now/20000*tau)*100;

  circles(cx+breath, cy);
  circles(cx-breath, cy);

  requestAnimationFrame(redrawCircles);
}

requestAnimationFrame(redrawCircles);
