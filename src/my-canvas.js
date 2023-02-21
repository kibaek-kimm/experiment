import Dot from "./class/Dot";
import { getAxisLength } from "./utils";

let canvas;
let ctx;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const GAP = 30;
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


setupCanvas();
setup();
draw();