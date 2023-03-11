import Dot from "./class/Dot";
import { getAxisLength, getPythagoras } from "./utils";

let canvas;
let ctx;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const GAP = 100;
const DOT_SIZE = 1;
const GAP_XAXIS_FOR_CENTER = windowWidth % (GAP + DOT_SIZE);
const GAP_YAXIS_FOR_CENTER = windowHeight % (GAP + DOT_SIZE);

const dots = [];

function setupCanvas() {
  canvas = document.getElementById('my-canvas');
  canvas.setAttribute('width', String(windowWidth));
  canvas.setAttribute('height', String(windowHeight));
  ctx = canvas.getContext('2d');
}

function setup() {
  const dotsXSize = getAxisLength(windowWidth, GAP + DOT_SIZE);
  const dotsYSize = getAxisLength(windowHeight, GAP + DOT_SIZE);

  for (let i = 0; i < dotsXSize; i++) {
    for (let j = 0; j < dotsYSize; j++) {
      dots.push(new Dot(i * GAP + GAP_XAXIS_FOR_CENTER, j * GAP + GAP_YAXIS_FOR_CENTER, DOT_SIZE));
    }
  }
}

function draw() {
  dots.forEach(dot => {
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.size, 0, 2 * Math.PI, true);
    ctx.fillStyle = '#aaa';
    ctx.fill();
    ctx.closePath();
  });
}

function handleMouseMove(e) {
  const RANGE_RADIUS = 50;
  // 특정 범위 내에 점 가져오기
  // 방향값(deltaX, deltaY) 가져오기
  dots.forEach(dot => {
    const distance = getPythagoras(Math.abs(dot.x - e.clientX), Math.abs(dot.y - e.clientY));
    const power = Math.abs(RANGE_RADIUS - distance);
    // const deltaX = 
    if (distance < RANGE_RADIUS) {
      console.log(power);
    }
  });

  // 
  // 가까울수록 커지는 수식 만들기
  // 점에 할당
  // draw
}

window.addEventListener('mousemove', handleMouseMove);


setupCanvas();
setup();
draw();