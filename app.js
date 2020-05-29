var canvas = document.getElementById("draw");

var ctx = canvas.getContext("2d");
resize();

// resize canvas when window is resized
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}


// last known position
var pos = {
  x: 0, y: 0 
};

// new position from mouse events
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1){
    return; // if mouse is not clicked, do not go further
  } 

  var color = document.getElementById("hex").value;

  ctx.beginPath(); // begin the drawing path
  
  // line properties
  ctx.lineWidth = 10; // width of line
  ctx.lineCap = "square"; // rounded end cap
  ctx.strokeStyle = color; // hex color of line

  // draw line
  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); // draw it!

}


// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);

// add event listeners to trigger on different mouse events
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);