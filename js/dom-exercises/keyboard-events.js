const d = document;
let canvas, ctx;
let currentX, currentY;
export default function drawCanvas(canvasSelector) {
  canvas = d.querySelector(canvasSelector);
  ctx = canvas.getContext("2d");
  draw(canvas, ctx, canvas.width / 2, canvas.height / 2);
  captureKeyboard(canvasSelector);
}

function outOfBounds() {
  ctx.fillStyle = "#880e4f";
  ctx.font = "bold 2vw Share Tech Mono";
  ctx.fillText(
    "You can't go out of bounds!",
    canvas.width / 2 - 260,
    canvas.height / 2
  );
}

function draw(canvas, ctx, x, y) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  currentX = x;
  currentY = y;
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue(
    "--keyboard-text"
  );
  ctx.fill();
}

function capture(e) {
  e.preventDefault();
  switch (e.key) {
    case "ArrowUp":
      if (currentY === canvas.height - (canvas.height - 20))
        return outOfBounds();
      draw(canvas, ctx, currentX, currentY - 5);
      break;
    case "ArrowDown":
      if (currentY === canvas.height - 20) return outOfBounds();
      draw(canvas, ctx, currentX, currentY + 5);
      break;
    case "ArrowLeft":
      if (currentX === canvas.width - (canvas.width - 20)) return outOfBounds();
      draw(canvas, ctx, currentX - 5, currentY);
      break;
    case "ArrowRight":
      if (currentX === canvas.width - 20) return outOfBounds();
      draw(canvas, ctx, currentX + 5, currentY);
      break;
    default:
      if (e.ctrlKey && e.code === "KeyA") alert("Alert from Keyboard");
      if (e.ctrlKey && e.code === "KeyP") prompt("Prompt from Keyboard");
      if (e.ctrlKey && e.code === "KeyC") confirm("Confirm from Keyboard");
  }
}

function stopCapture() {
  d.removeEventListener("keydown", capture);
}

function startCapture() {
  d.addEventListener("keydown", capture);
}

function captureKeyboard(canvas) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(canvas)) {
      startCapture();
    } else {
      stopCapture();
    }
  });
}
