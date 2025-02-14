const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
//Drawuing a box
//         x   y   Width height

/* console.log(Math.random() > 0.5); // log false and true 50% of the time
  //Math.random gives a random number from 0 to 0.9999999 */
let score = 0;
const player = {
  x: 175,
  y: 200,
  height: 50,
  width: 50,
  speed: -6,
};
const obstacle = {
  x: 500,
  y: 200,
  height: 200,
  width: 50,
};

const obstacle2 = {
  x: 800,
  y: 0,
  height: 200,
  width: 50,
};

const button = document.querySelector("button");
button.addEventListener("click", () => {
  player.speed = -6;
  c.clearRect(0, 0, 400, 400);
  c.fillRect(player.x, player.y, player.width, player.height);
});

const left = document.querySelector("#left");
const right = document.querySelector("#right");

left.addEventListener("click", () => {
  player.speed = -1;
});
right.addEventListener("click", () => {
  player.speed = 1;
});
window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    e.preventDefault();
    player.speed = -6;
  }
  console.log(e.key == " ");
});

function checkBounds() {
  if (player.y > 350 || player.y < 0) {
    reset();
    alert("you died");
  }

  if (
    player.x + player.width > obstacle.x &&
    player.x < obstacle.x + obstacle.width &&
    player.y + player.height > obstacle.y &&
    player.y < obstacle.y + obstacle.height
  ) {
    reset();
    alert("You died");
  }
  if (
    player.x + player.width > obstacle2.x &&
    player.x < obstacle2.x + obstacle2.width &&
    player.y + player.height > obstacle2.y &&
    player.y < obstacle2.y + obstacle2.height
  ) {
    reset();
    alert("You died");
  }
}

setInterval(() => {
  gameLoop();
}, 20);

function reset() {
  obstacle.x = 500;
  obstacle2.x = 800;
  player.y = 175;
  player.speed = -6;
  score = 0;
}
function render() {
  player.speed += 0.3;
  player.y += player.speed;
  obstacle.x -= 2;
  obstacle2.x -= 2;
  c.clearRect(0, 0, 400, 400);
  c.fillRect(player.x, player.y, player.width, player.height);
  c.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  c.fillRect(obstacle2.x, obstacle2.y, obstacle2.width, obstacle2.height);
  if (obstacle.x < -obstacle.width) {
    obstacle.x = 500;
  }
  if (obstacle2.x < -obstacle2.width) {
    obstacle2.x = 500;
  }
}

function gameLoop() {
  render();
  checkBounds();
  score += 0.1;
  document.querySelector("#score").textContent = parseInt(score);
}
