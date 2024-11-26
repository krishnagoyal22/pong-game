const startText = document.getElementById("startText");

let gameRunning = false;

document.addEventListener("keydown", startGame);

function startGame() {
  gameRunning = true;
  startText.style.display = "none";
  document.removeEventListener("keydown", startGame);
  gameLoop();
}
function gameLoop() {
  console.log("game running");
}
