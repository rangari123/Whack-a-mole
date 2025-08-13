// variables

let currMoleTile; // which tile has a mole
let currPlantTile; // which tile has a plant

let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};

function setGame() {
  // create 3 by 3 board

  for (let i = 0; i < 9; i++) {
    // crete a tile <div id = "0"></div>
    let tile = document.createElement("div");
    tile.id = i.toString();

    tile.addEventListener("click", selectTile);

    document.getElementById("board").appendChild(tile);
  }

  setInterval(setMole, 1000);
  setInterval(setPlant, 2000);
}

function getRandomTile() {
  //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

{
  /* <div id="3"><img src="./monty-mole.png"></div> */
}

function setMole() {
  if (gameOver) {
    return;
  }

  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }

  // mole = img of mole
  let mole = document.createElement("img");
  mole.src = "./monty-mole.png";

  let num = getRandomTile(); // random Number function

  if (currPlantTile && currPlantTile.id == num) {
    return;
  }

  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

{
  /* <div id="6"><img src="./piranha-plant.png"></div> */
}

function setPlant() {
  if (gameOver) {
    return;
  }
  if (currPlantTile) {
    currPlantTile.innerHTML = "";
  }
  // creat the plant
  let plant = document.createElement("img");
  plant.src = "./piranha-plant.png";

  let num = getRandomTile();

  if (currMoleTile && currMoleTile.id == num) {
    return;
  }
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  } else if (this == currPlantTile) {
    document.getElementById("score").innerText =
      "Game Over " + score.toString();

    gameOver = true;
  }
}
