// import "option.js"

// Je declare toutes mes constantes
const btns = document.querySelectorAll(".btn-pion");
const crossTurn = document.getElementById("cross-turn");
const divOpacity = document.getElementById("truc");
const roundSect = document.getElementById("round-sect");
const roundSectTied = document.getElementById("round-sect-tied");
const headingTwo = document.getElementById("heading-two");
const headingTwoTied = document.getElementById("heading-two-tied");
const headingTwoBack = document.getElementById("heading-two-back");
const nextRound = document.getElementById("next-round");
const quitBtn = document.getElementById("quit");
const nextRoundTied = document.getElementById("next-round-tied");
const crossScore = document.getElementById("cross-score");
const circleScore = document.getElementById("circle-score");
const playerWin = document.getElementById("player-win");
const pionRound = document.getElementById("pion-round");
const backBtn = document.getElementById("back-btn");
const roundR = document.getElementById("round-r");
const scoreTied = document.getElementById("score-tied");
const roundSectBack = document.getElementById("round-sect-back");
const noBack = document.getElementById("no-back");
const yesBack = document.getElementById("yes-back");
const menuGame = document.getElementById("menu-game");
const playGame = document.getElementById("play-game");
const playerBtn = document.getElementById("player-btn");

//Le numero du jouer : x = 0 ; o = 1
let currentPlayer = 0;

//Les alt de mes images
let CIRCLE_ALT = "circle-play";
let CROSS_ALT = "cross-play";

//On verifie si le jeu est actif ou non
let gameActive = true;

//On creer un nouveau tableau vide pour mettre les alt dedans
let arrayPions = ["", "", "", "", "", "", "", "", ""];

//On creer un compteur
let counterX = 0;
let counterO = 0;
let counterTied = 0;

//On creer un tableau pour mettre les coups gagnants du morpions
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

//on creer une boucle qui parcoure les boutons ou l'on mettera les images dedans
for (let i = 0; i < btns.length; i++) {
  //On creer une variable appeller "btn" qui est egale a "btns[btns.length]"
  let btn = btns[i];

  //On ajoute un evenement de clique sur les boutons
  btn.addEventListener("click", () => {
    //On creer une constante nommer "index" qui creer un tableau qui recupere tous les bouton et
    //apres on fait un indexOf pour recuperer l'index du tableau
    const index = [...btns].indexOf(btn);

    //On creer une constante nommer "pions" qui recupere les 1er elements enfants de btn
    const pions = btn.firstElementChild;

    //On verifie si le bouton est rempli
    if (pions.alt) {
      return;
    }

    //On verifie si currentPlayer est pair
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

    //On donne les alt au tableau arrayPions vide
    arrayPions[index] = pions.alt;

    //On incremente currentPlayer pour faire +1
    currentPlayer++;

    //On ecoute le clique du bouton nextRound
    nextRound.addEventListener("click", () => {
      //On desactive le menu de victoire
      divOpacity.style.display = "none";
      roundSect.style.display = "none";

      //On vide la grilles des images et des alt
      pions.src = "";
      arrayPions[index] = pions.alt = "";
    });

    playerBtn.addEventListener("click", () => {
      divOpacity.style.display = "none";
      pions.src = "";
      arrayPions[index] = pions.alt = "";
      counterO = 0;
      counterTied = 0;
      counterX = 0;
      crossScore.textContent = counterX;
      scoreTied.textContent = counterTied;
      circleScore.textContent = counterO;
    });
    //On ecoute le clique du bouton nextRound
    nextRoundTied.addEventListener("click", () => {
      //On desactive le menu de victoire
      divOpacity.style.display = "none";
      roundSectTied.style.display = "none";

      //On vide la grilles des images et des alt
      pions.src = "";
      arrayPions[index] = pions.alt = "";
    });

    yesBack.addEventListener("click", () => {
      //On desactive le menu de victoire
      divOpacity.style.display = "none";
      roundSectBack.style.display = "none";

      //On vide la grilles des images et des alt
      pions.src = "";
      arrayPions[index] = pions.alt = "";
      counterO = 0;
      counterX = 0;
      counterTied = 0;
      scoreTied.textContent = counterTied;
      crossScore.textContent = counterX;
      circleScore.textContent = counterO;
    });
    console.log(arrayPions);

    if (!arrayPions.includes("")) {
      console.log("match nul");
      divOpacity.style.display = "block";
      roundSectTied.style.display = "flex";
      roundSectTied.style.flexDirection = "column";
      roundR.removeChild(pionRound);
      headingTwoTied.textContent = "ROUND TIED";
      headingTwoTied.style.color = "#A8BFC9";
      counterTied++;
      scoreTied.textContent = counterTied;
    }

    //On appelle la fonction checkGameState
    checkGameState();
  });
}

//On creer une fonction nommer "checkGameState"
function checkGameState() {
  //On boucle sur le tableau "winningCombos"
  for (let i = 0; i < winningCombos.length; i++) {
    let combo = winningCombos[i];
    let first = arrayPions[combo[0]];
    let second = arrayPions[combo[1]];
    let third = arrayPions[combo[2]];

    //On verifie si il y a une condition de victoire du tableau winningCombos
    if (first && first === second && first === third) {
      //On met le jeu a non-actif
      gameActive = false;
      //On log la victoire avec le message "WIN"
      console.log("WIN");
      //On active les div pour le menu de victoire
      divOpacity.style.display = "block";
      roundSect.style.display = "flex";
      if (currentPlayer % 2 === 0) {
        pionRound.src = "./assets/circle.svg";
        headingTwo.style.color = "#F2B137";
        playerWin.textContent = "PLAYER 1 WINS!";
        counterO++;
        circleScore.textContent = counterO;
      } else {
        pionRound.src = "./assets/cross.svg";
        headingTwo.style.color = "#31C3BD";
        playerWin.textContent = "PLAYER 2 WINS!";
        counterX++;
        crossScore.textContent = counterX;
      }
    }
  }
}

noBack.addEventListener("click", () => {
  divOpacity.style.display = "none";
  roundSectBack.style.display = "none";
});

backBtn.addEventListener("click", () => {
  divOpacity.style.display = "block";
  roundSectBack.style.display = "flex";
  roundSectBack.style.flexDirection = "column";
  headingTwoBack.textContent = "RESTART GAME?";
  headingTwoBack.style.color = "#A8BFC9";
  noBack.textContent = "NO, CANCEL";
  yesBack.textContent = "YES, RESTART";
});

quitBtn.addEventListener("click", () => {
  roundSect.style.display = "none";
  roundSectTied.style.display = "none";
  menuGame.style.display = "flex";
  playGame.style.display = "none";
});

playerBtn.addEventListener("click", () => {
  menuGame.style.display = "none";
  playGame.style.display = "flex";
});
