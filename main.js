const btns = document.querySelectorAll(".btn-pion");
const divOpacity = document.getElementById("truc");
const roundSect = document.getElementById("round-sect");
const headingTwo = document.getElementById("heading-two");

let currentPlayer = 0;

let CIRCLE_ALT = "circle";
let CROSS_ALT = "cross";

let gameActive = true;

let arrayPions = ["", "", "", "", "", "", "", "", ""];

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const crossTurn = document.getElementById("cross-turn");

for (let i = 0; i < btns.length; i++) {
  let btn = btns[i];
  btn.addEventListener("click", () => {
    if (gameActive == false) {
      return;
    }
    const index = [...btns].indexOf(btn);
    const pions = btn.firstElementChild;

    if (pions.alt) {
      return;
    }

    if (currentPlayer % 2 === 0) {
      pions.src = "./assets/cross.svg";
      pions.alt = CROSS_ALT;
      crossTurn.src = "./assets/circle.svg";
      crossTurn.alt = "circle-turn";
    } else {
      pions.src = "./assets/circle.svg";
      pions.alt = CIRCLE_ALT;
      crossTurn.src = "./assets/cross.svg";
      crossTurn.alt = "cross-turn";
    }
    arrayPions[index] = pions.alt;
    currentPlayer++;

    checkGameState();
  });
}

function checkGameState() {
  for (let i = 0; i < winningCombos.length; i++) {
    let combo = winningCombos[i];
    let first = arrayPions[combo[0]];
    let second = arrayPions[combo[1]];
    let third = arrayPions[combo[2]];
    if (first && first === second && first === third) {
      gameActive = false;
      console.log("WIN");
      divOpacity.style.display = "block";
      roundSect.style.display = "flex";
      roundSect.style.alignItems = "center";
      roundSect.style.justifyContent = "center";
      roundSect.style.flexDirection = "column";
      const pionRound = document.getElementById("pion-round");
      if (currentPlayer % 2 === 0) {
        pionRound.src = "./assets/circle.svg";
        headingTwo.style.color = "#F2B137";
      } else {
        pionRound.src = "./assets/cross.svg";
        headingTwo.style.color = "#31C3BD";
      }
    }
  }
}